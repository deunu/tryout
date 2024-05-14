"use client";
import styles from "./page.module.css";
import React, { useState } from 'react';

export default function Home() {
  const [choices, setChoices] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isloading, setIsloading] = useState('false');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsloading(true)
    const response = await fetch("/api/chatgpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: userInput,
      }),
    });

    setIsloading(false)
    const result = await response.json();
    setChoices(result.choices);
  };

  return (
    <main className={styles.main}>
      <div className={styles.card}>
      <p>Welcome!!!!</p>  
      <p>Chat GPT is thrilled to see you!!!!</p>
      <p>How can I assist you today?</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={userInput} 
          onChange={handleInputChange} 
          placeholder="Enter your question..." 
          className={styles.input} 
        />
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>

      {choices.map(choice => (
        <p className={styles.response} key={choice.index}>{choice.message.content}</p>
      ))}

      </div>
    </main>
  );
}
