import { surpriseMePrompts } from "../constants";

export function getRandomPrompts(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPromp = surpriseMePrompts[randomIndex];

  if (randomPromp === prompt) return getRandomPrompts(prompt);

  return randomPromp;
}