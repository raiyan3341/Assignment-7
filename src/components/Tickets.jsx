import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Calendar } from "lucide-react";

const Tickets = ({ticketsPromise,tickets,setTickets,taskStatus,setTaskStatus,resolvedTasks,setResolvedTasks,
  inProgressCount,setInProgressCount,resolvedCount,setResolvedCount,}) =>{
  useEffect(() =>{
    ticketsPromise.then((data)=> setTickets(data));
  }, [ticketsPromise, setTickets]);


  const handleAddToTask = (ticket) =>{
    if (!taskStatus.some((t) => t.id === ticket.id)){
      setTaskStatus([...taskStatus, { ...ticket, status: "In-Progress" }]);
      setInProgressCount(inProgressCount + 1);
      toast.info("In-Progress");
    }
  };

  const handleComplete = (ticket) =>{
    setTaskStatus(taskStatus.filter((t) => t.id !== ticket.id));
    setResolvedTasks([...resolvedTasks, { ...ticket, status: "Resolved" }]);
    setTickets(tickets.filter((t) => t.id !== ticket.id));
    setInProgressCount(inProgressCount - 1);
    setResolvedCount(resolvedCount + 1);
    toast.success("Complete");
  };

  return (
    <div className="max-w-[1240px] mx-auto mt-10 flex flex-col md:flex-row gap-5 px-3">
      <div className="flex-1">
        <h1 className="text-xl font-bold mb-6">Customer Tickets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tickets.map((ticket) =>(
            <div key={ticket.id} onClick={() => handleAddToTask(ticket)}
              className="w-[430px] md:w-[450px] p-5 rounded-xl bg-[#ebebebe5] hover:shadow-lg transition">
              <div className="flex justify-between items-center">
                <h1 className="font-bold">{ticket.title}</h1>
                <p className={`w-[90px] h-[29px] flex items-center justify-center rounded-xl ${ticket.status === "Open"
                      ? "bg-[#B9F8CF]" : ticket.status === "In-Progress"
                      ? "bg-yellow-200" : "bg-gray-300"
                  }`}>
                  {ticket.status}
                </p>
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-700">{ticket.description}</p>
              </div>
              <div className="flex justify-between mt-3 text-sm">
                <div className="flex gap-4">
                  <p>{ticket.id}</p>
                  <p className={`font-semibold ${ticket.priority.includes("HIGH")
                        ? "text-red-500" : ticket.priority.includes("MEDIUM")
                        ? "text-yellow-500" : "text-green-500"
                    }`}>
                    {ticket.priority}</p>
                </div>
                <div className="flex gap-4">
                  <p>{ticket.assignee}</p>
                  <p className="flex items-center"> <span className="w-[25px]"><Calendar /></span>  {ticket.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[250px]">
        <h1 className="text-xl font-bold">Task Status</h1>
        {taskStatus.length === 0 && (<p className="mt-2">Select a ticket to add to Task Status</p>
        )}

        {taskStatus.map((ticket) =>(
          <div key={ticket.id} className="grid grid-rows-1 mt-4 p-3 bg-gray-100 rounded-md">
            <p className="mb-2 font-medium">{ticket.title}</p>
            <button onClick={() => handleComplete(ticket)}
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Complete</button>
          </div>
        ))}

        <div className="mt-6">
          <h1 className="text-xl font-bold">Resolved Task</h1>
          {resolvedTasks.length === 0 ? (<p className="mt-2">No resolved tasks yet.</p>) : (resolvedTasks.map((ticket) =>(
              <div className="grid grid-rows-1 mt-4 p-3 bg-green-100 rounded-md">
                <p key={ticket.id} className="mt-2">{ticket.title}</p>
              <p className="text-green-600 mt-2">Complete</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};




export default Tickets;
