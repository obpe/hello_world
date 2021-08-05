// create a list of top 20 fibonacci number start from 0
// create a input box for users to check whether their input is a fibonacci or not...

import React, {useState, useMemo} from 'react';
import _ from 'underscore';

const fib = _.memoize(function(n) {
  return (n <= 1) ? n : fib(n-1) + fib(n-2);
});

function isPerfectSquare(x)
{
    let s = parseInt(Math.sqrt(x));
    return (s * s === x);
}
 
function isFibonacci(n)
{
  if (n==='') return false;
    return isPerfectSquare(5 * n * n + 4) ||
           isPerfectSquare(5 * n * n - 4);
}

const Input = () => {
  const [query, setQuery] = useState('');

  const isFibo = query => {
      return isFibonacci(query);
  }

  const handleChange = e => {
      const value = e.target.value.replace(/[^\d]/,'');
      if (value >= 0) setQuery(value)
  }

  return (
      <div>
          <input
              type='text'
              value={query}
              onChange={handleChange}
          />
          {isFibo(query)===true ? <p>true</p> : <p>false</p>}

      </div>
  )
}

function Fib({n}) {
  const result = useMemo(() => fib(n), [n]);
  return (
    <li key={n}>The {n}th Fibonacci is --- {result}</li>
  )
}

function App() {

  return (
    <div className="App">
      <ul>
            { Array.from({length: 20}).map((e,i) => 
              <Fib key={i} n={i} />
            )}
      </ul>
      <Input />
    </div>
  );
}

export default App;
