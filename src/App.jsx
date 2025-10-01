import React, { useState, Suspense } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/banner";
import Tickets from "./components/tickets";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ticketsPromise = fetch("./tickets.json").then((res) => res.json());

function App() {
  const [tickets, setTickets] = useState([]); 
  const [taskStatus, setTaskStatus] = useState([]); 
  const [resolvedTasks, setResolvedTasks] = useState([]); 
  
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>

      <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount}></Banner>

      <Suspense fallback={<div>Loading...</div>}>
        <Tickets ticketsPromise={ticketsPromise}
          tickets={tickets}
          setTickets={setTickets}
          taskStatus={taskStatus}
          setTaskStatus={setTaskStatus}
          resolvedTasks={resolvedTasks}
          setResolvedTasks={setResolvedTasks}
          inProgressCount={inProgressCount}
          setInProgressCount={setInProgressCount}
          resolvedCount={resolvedCount}
          setResolvedCount={setResolvedCount}></Tickets>
      </Suspense>

      <Footer></Footer>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
