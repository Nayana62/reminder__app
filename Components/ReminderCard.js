import React from "react";

function ReminderCard(props) {
  const { children, reminderkey, handleDelete } = props;

  return (
    <div className="p-2 relative sm:p-3 border-2 flex items-stretch border-[#3c7482] border-solid">
      <div className="flex-1 flex">{children}</div>

      <div>
        <i
          onClick={handleDelete(reminderkey)}
          className="fa-solid fa-trash px-2 duration-300 hover:scale-125 cursor-pointer"
        ></i>
      </div>
    </div>
  );
}

export default ReminderCard;
