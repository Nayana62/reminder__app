import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";
import ReminderCard from "./ReminderCard";
import { doc, setDoc, deleteField } from "firebase/firestore";
import { db } from "@/firebase";
import useFetchReminders from "@/hooks/fetchReminder";

function UserDashboard() {
  const { userInfo, currentUser } = useAuth();
  const [reminder, setReminder] = useState("");
  const { reminders, setReminders, loading, error } = useFetchReminders();

  async function handleAddReminder() {
    if (!reminder) {
      return;
    }
    const newKey =
      Object.keys(reminders || {}).length === 0
        ? 1
        : Math.max(...Object.keys(reminders || {})) + 1;
    setReminders({ ...reminders, [newKey]: reminder });
    const userRef = doc(db, "users", currentUser.uid);
    await setDoc(
      userRef,
      {
        reminders: {
          [newKey]: reminder,
        },
      },
      { merge: true }
    );
    setReminder("");
  }

  function handleDelete(reminderkey) {
    return async () => {
      const tempObj = { ...reminders };
      delete tempObj[reminderkey];

      setReminders(tempObj);
      const userRef = doc(db, "users", currentUser.uid);
      await setDoc(
        userRef,
        {
          reminders: {
            [reminderkey]: deleteField(),
          },
        },
        { merge: true }
      );
    };
  }

  return (
    <div className="w-full max-w-[50ch] mx-auto flex flex-col flex-1 gap-3 sm:gap-5 text-xs sm:text-sm">
      <div className="flex items-stretch">
        <input
          type="text"
          placeholder="Enter reminder"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
          className=" outline-none p-3 text-base sm:text-lg text-slate-900 rounded-tl rounded-bl flex-1"
        />
        <button
          onClick={handleAddReminder}
          className="w-fit px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-40 rounded-tr rounded-br"
        >
          ADD
        </button>
      </div>

      {loading && (
        <div className="flex-1 grid place-items-center ">
          <i className="fa-solid fa-spinner animate-spin text-6xl"></i>
        </div>
      )}

      {userInfo && !loading && (
        <>
          {Object.keys(reminders).map((reminder, i) => {
            return (
              <ReminderCard
                key={i}
                reminderkey={reminder}
                handleDelete={handleDelete}
              >
                {reminders[reminder]}
              </ReminderCard>
            );
          })}
        </>
      )}
    </div>
  );
}

export default UserDashboard;
