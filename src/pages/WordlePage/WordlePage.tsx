import { useEffect, useState } from 'react';
import { WORDS_API } from '../../constants';
import LetterGrid from '../../components/Wordle/LetterGrid';
import { TColor, TLine } from '../../typings/Wordle';
import WordInput from '../../components/Wordle/WordInput';
import API from '../../lib/API';

const api = new API();

export const WordlePage = () => {
  // List of all possible words
  const [words, setWords] = useState<string[]>([]);
  // Word to be guessed
  const [solution, setSolution] = useState<string>('');
  // Length of word being guessed
  // const [wordLen, setWordLen] = useState<number>(5);
  const wordLen: number = 5;
  // How many attempts are they allowed
  // const [attempts, setAttempts] = useState<number>(6);
  const attempts: number = 6;
  // Current attempt
  const [guess, setGuess] = useState<string>('');
  // All attempts
  const [lines, setLines] = useState<Array<TLine>>([]);
  // Whether or not game is complete
  const [isGameComplete, setIsGameComplete] = useState<boolean>(false);

  const getRandomWord = () => {
    const randomInt = Math.floor(Math.random() * words.length);
    const newWord = words[randomInt];
    if (newWord) {
      setSolution(newWord);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    const getWords = async () => {
      const response = await api.get(`${WORDS_API}?length=${wordLen}`, {
        signal: controller.signal,
      }).then(res => res.json());
      const randomInt = Math.floor(Math.random() * response.length);

      setWords(response);
      setSolution(response[randomInt]);
    };

    getWords();

    return () => controller?.abort();
  }, []);

  useEffect(() => {
    const newLine = getLetters();
    if (newLine.length) {
      setLines(prevLines => [...prevLines, newLine]);
    }
    // eslint-disable-next-line
  }, [guess]);

  useEffect(() => {
    if (solution.length > 0 && (lines.length === attempts || guess === solution)) {
      setIsGameComplete(true);
    }
    // eslint-disable-next-line
  }, [lines]);

  const getLetters = (): TLine => {
    const abc = solution.split('');
    const xyz = guess.split('');
    let result: TLine = xyz.map((letter, idx) => {
      let color: TColor = "base";

      if (letter === abc[idx]) {
        // Answer revealed early
        if (isGameComplete) {
          color = "info";
        } else {
          color = "success";
        }
      } else if (solution.indexOf(letter) >= 0) {
        color = "warning";
      } else {
        color = "neutral";
      }

      return {
        char: letter,
        color: color,
      };
    });
    return result;
  };

  const onGuess = (val: string) => {
    // Verify word exists in dictionary
    if (words.indexOf(val) >= 0) {
      // Word isn't the desired length
      // Although, words in dictionary already limited to correct length
      if (val.length === wordLen) {
        setGuess(val);
      }
    }
    // User entered an unknown word
    else {
      alert('not a word');
    }
  };

  const onRevealAnswer = () => {
    setIsGameComplete(true);
    setGuess(solution);
  };

  const onRestart = () => {
    // window.location.reload();
    setGuess('');
    setLines([]);
    setIsGameComplete(false);
    getRandomWord();
  };

  return (
    <div className="max-w-lg mx-auto px-8 space-y-4 flex flex-col justify-center">
      <WordInput onGuess={onGuess} disabled={isGameComplete} />
      <LetterGrid lines={lines} cols={wordLen} rows={attempts} />

      {isGameComplete ? (
        <>
          <p className="text-center">Solution: {solution}</p>
          <button className="btn btn-secondary" onClick={onRestart}>
            Restart
          </button>
        </>
      ) : (
        <button className="btn btn-primary" onClick={onRevealAnswer}>
          Show Solution
        </button>
      )}
    </div>
  );
};