// Task 1: Highlight words over 8 characters long
const paragraph = document.getElementById('paragraph');
let paragraphText = `Does she need to be an empathetic leader? Ask about that. Does she need to take your company public? Ask about that. If you're the candidate, talk about why you took certain jobs. Explain why you left. Explain why you chose a certain school. Share why you decided to go to grad school. Discuss why you took a year off to backpack through Europe, and what you got out of the experience. What are your biggest weaknesses? Every candidate knows how to answer this question: Just pick a theoretical weakness and magically transform that flaw into a strength in disguise! For example: "My biggest weakness is getting so absorbed in my work that I lose all track of time. Every day I look up and realize everyone has gone home! I know I should be more aware of the clock, but when I love what I'm doing I just can't think of anything else." So your "biggest weakness" is that you'll put in more hours than everyone else? Great. What are your biggest strengths? I'm not sure why interviewers ask this question; your resume and experience should make your strengths readily apparent! Even so, if you're asked, provide a sharp, on-point answer. Be clear and precise! If you're a great problem solver, don't just say that: Provide a few examples, pertinent to the opening, that prove you're a great problem solver! If you're an emotionally intelligent leader, don't just say that!`;

paragraph.innerHTML = paragraphText.split(' ').map(word => {
    return word.length > 8 ? `<span class="highlight">${word}</span>` : word;
}).join(' ');

// Task 2: Add a link back to the source
const link = document.getElementById('sourceLink');
link.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html';

// Task 3: Split each new sentence onto a separate line
paragraph.innerHTML = paragraph.innerHTML.split('.').map(sentence => {
    return sentence.trim() ? `<span class="sentence">${sentence.trim()}.</span>` : '';
}).join('');

// Task 4: Count the number of words in the paragraph
const wordCount = paragraphText.split(' ').filter(word => word.trim().length > 0).length;
document.getElementById('wordCount').textContent = `Word count: ${wordCount}`;

// Task 5: Replace ? with 🤔 and ! with 😲
paragraph.innerHTML = paragraph.innerHTML.replace(/\?/g, '🤔').replace(/!/g, '😲');
