export const chapters = [
  // ===== SECTION 1: শুরু করা =====
  {
    id: 'what-is-react',
    section: 'শুরু করা',
    title: 'React কী?',
    level: 'beginner',
    readTime: '৫ মিনিট',
    intro: 'React হলো Facebook (Meta) দ্বারা তৈরি একটি জনপ্রিয় JavaScript লাইব্রেরি যা ব্যবহারকারী ইন্টারফেস তৈরি করতে ব্যবহৃত হয়। এটি component-based architecture ব্যবহার করে।',
    content: [
      {
        type: 'cards',
        items: [
          { icon: '♡', title: 'Component-Based', text: 'পুনরায় ব্যবহারযোগ্য UI অংশ দিয়ে তৈরি' },
          { icon: '♡', title: 'Virtual DOM', text: 'দ্রুত ও দক্ষ UI আপডেট সিস্টেম' },
          { icon: '♡', title: 'বিশাল ইকোসিস্টেম', text: 'লক্ষাধিক ডেভেলপার ও লাইব্রেরি' },
          { icon: '♡', title: 'React Native', text: 'মোবাইল অ্যাপ ডেভেলপমেন্টও সম্ভব' },
        ]
      },
      { type: 'h2', text: 'React কেন শিখবেন?' },
      { type: 'p', text: 'আজকের web development-এ React সবচেয়ে জনপ্রিয় JavaScript লাইব্রেরি। Facebook, Instagram, Netflix, Airbnb — এই বড় কোম্পানিগুলো React ব্যবহার করে। React শিখলে আপনি web এবং mobile দুটোই বানাতে পারবেন।' },
      { type: 'h2', text: 'React কীভাবে কাজ করে?' },
      { type: 'p', text: 'React একটি Virtual DOM ব্যবহার করে। সাধারণ HTML পেজে কোনো পরিবর্তন হলে পুরো পেজ নতুন করে render হয়। কিন্তু React শুধু যে অংশটি পরিবর্তন হয়েছে, সেটুকুই আপডেট করে — এটি অনেক দ্রুত।' },
      { type: 'callout', variant: 'info', icon: '♡', title: 'মনে রাখুন', text: 'React একটি লাইব্রেরি, framework নয়। এর মানে এটি শুধু UI-এর কাজ করে। Routing, state management-এর জন্য অন্য লাইব্রেরি (React Router, Zustand) লাগে।' },
      { type: 'h2', text: 'প্রথম React কোড দেখুন' },
      {
        type: 'code', lang: 'jsx',
        code: `// একটি সরল React component
          function App() {
            return (
              <div>
                <h1>নমস্কার, বাংলাদেশ! 🇧🇩</h1>
                <p>আমার প্রথম React অ্যাপ্লিকেশন</p>
              </div>
            );
          }

          export default App;`
      },
      { type: 'callout', variant: 'tip', icon: '♡', title: 'JSX কী?', text: 'উপরের HTML-এর মতো অংশটিকে JSX বলে। এটি JavaScript-এর মধ্যে HTML লেখার একটি বিশেষ syntax। পরবর্তী অধ্যায়ে বিস্তারিত শিখব।' },
    ]
  },

  {
    id: 'setup',
    section: 'শুরু করা',
    title: 'পরিবেশ সেটআপ',
    level: 'beginner',
    readTime: '৮ মিনিট',
    intro: 'React শেখা শুরু করতে হলে প্রথমে আপনার কম্পিউটারে সঠিক development পরিবেশ তৈরি করতে হবে। এখানে ধাপে ধাপে সব দেখানো হয়েছে।',
    content: [
      {
        type: 'cards',
        items: [
          { icon: '♡', title: 'Node.js', text: 'JavaScript runtime। v18 বা তার বেশি সংস্করণ ইনস্টল করুন।' },
          { icon: '♡', title: 'npm / yarn', text: 'প্যাকেজ ম্যানেজার। Node.js-এর সাথে npm আসে।' },
          { icon: '♡', title: 'VS Code', text: 'সবচেয়ে জনপ্রিয় ও বিনামূল্যের কোড এডিটর।' },
          { icon: '♡', title: 'Vite', text: 'দ্রুত ও আধুনিক React project scaffolding tool।' },
        ]
      },
      { type: 'h2', text: 'নতুন প্রজেক্ট তৈরি (Vite দিয়ে)' },
      { type: 'p', text: 'আধুনিক React development-এ Vite সবচেয়ে জনপ্রিয় tool। এটি অনেক দ্রুত এবং সহজে কনফিগার করা যায়:' },
      {
        type: 'code', lang: 'bash',
        code: `# নতুন React প্রজেক্ট তৈরি করুন
npm create vite@latest my-bangla-app -- --template react

# প্রজেক্ট ফোল্ডারে যান
cd my-bangla-app

# সব dependency ইনস্টল করুন
npm install

# development server চালু করুন
npm run dev`
      },
      { type: 'h2', text: 'প্রজেক্টের ফাইল কাঠামো' },
      {
        type: 'code', lang: 'text',
        code: `my-bangla-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/          ← ছবি, ফন্ট ইত্যাদি
│   ├── App.jsx          ← মূল component
│   ├── App.css          ← App-এর styles
│   ├── main.jsx         ← entry point
│   └── index.css        ← global styles
├── index.html           ← HTML টেমপ্লেট
├── package.json         ← প্রজেক্ট কনফিগ
└── vite.config.js       ← Vite কনফিগ`
      },
      { type: 'h2', text: 'VS Code এক্সটেনশন' },
      { type: 'p', text: 'কোডিং আরও সহজ করতে এই VS Code extensions ইনস্টল করুন:' },
      {
        type: 'cards',
        items: [
          { icon: '♡', title: 'ES7+ React Snippets', text: 'রফ্তানি component দ্রুত তৈরির shortcut' },
          { icon: '♡', title: 'Prettier', text: 'কোড formatting স্বয়ংক্রিয় করে' },
          { icon: '♡', title: 'ESLint', text: 'কোডের ভুল খুঁজে বের করে' },
          { icon: '♡', title: 'Tailwind CSS', text: 'Tailwind ব্যবহার করলে অটোকমপ্লিট' },
        ]
      },
      { type: 'callout', variant: 'tip', icon: '♡', title: 'দ্রুত শুরু করুন', text: 'সব কিছু install না করলেও চলবে। শুধু Node.js আর VS Code থাকলেই React শেখা শুরু করতে পারবেন। বাকিগুলো পরে যোগ করবেন।' },
    ]
  },

  // ===== SECTION 2: মূল ধারণা =====
  {
    id: 'jsx',
    section: 'মূল ধারণা',
    title: 'JSX বোঝা',
    level: 'beginner',
    readTime: '১০ মিনিট',
    intro: 'JSX (JavaScript XML) হলো React-এর একটি syntax extension। এটি JavaScript-এর মধ্যে HTML-এর মতো markup লিখতে দেয়। Babel এটিকে সাধারণ JavaScript-এ রূপান্তর করে।',
    content: [
      { type: 'h2', text: 'JSX কীভাবে কাজ করে?' },
      { type: 'p', text: 'JSX মূলত React.createElement() function call-এ রূপান্তরিত হয়। তাই এটি সত্যিকারের HTML নয়, এটি JavaScript।' },
      {
        type: 'code', lang: 'jsx',
        code: `// আপনি যা লিখেন (JSX)
const element = <h1 className="title">হ্যালো!</h1>;

// Babel এটিকে এইভাবে রূপান্তর করে
const element = React.createElement(
  'h1',
  { className: 'title' },
  'হ্যালো!'
);`
      },
      { type: 'h2', text: 'JSX-এ JavaScript Expression' },
      { type: 'p', text: 'JSX-এর মধ্যে {} ব্যবহার করে যেকোনো JavaScript expression লিখতে পারেন:' },
      {
        type: 'code', lang: 'jsx',
        code: `function Profile() {
  const name = "সুমাইয়া আক্তার";
  const age = 24;
  const skills = ['React', 'JavaScript', 'CSS'];

  return (
    <div>
      <h1>{name}</h1>
      <p>বয়স: {age} বছর</p>
      <p>দক্ষতা: {skills.join(', ')}</p>
      <p>জন্মসাল: {2024 - age}</p>
      {/* এটি একটি comment */}
    </div>
  );
}`
      },
      { type: 'h2', text: 'JSX বনাম HTML — গুরুত্বপূর্ণ পার্থক্য' },
      {
        type: 'table',
        headers: ['বিষয়', 'HTML', 'JSX'],
        rows: [
          ['CSS ক্লাস', 'class="box"', 'className="box"'],
          ['Label এর for', 'for="email"', 'htmlFor="email"'],
          ['Style লেখা', 'style="color: red"', 'style={{ color: "red" }}'],
          ['Self-closing', '<br>', '<br />'],
          ['Comment', '<!-- comment -->', '{/* comment */}'],
          ['Event handler', 'onclick="fn()"', 'onClick={fn}'],
        ]
      },
      { type: 'h2', text: 'Conditional Rendering' },
      {
        type: 'code', lang: 'jsx',
        code: `function LoginStatus({ isLoggedIn }) {
  return (
    <div>
      {/* পদ্ধতি ১: Ternary operator */}
      {isLoggedIn ? <p>স্বাগতম! ✓</p> : <p>লগইন করুন</p>}

      {/* পদ্ধতি ২: && operator */}
      {isLoggedIn && <button>লগআউট</button>}

      {/* পদ্ধতি ৩: if-else (function-এর বাইরে) */}
    </div>
  );
}`
      },
      { type: 'callout', variant: 'warn', icon: '♡', title: 'সতর্কতা', text: 'JSX-এ সবসময় একটিমাত্র parent element থাকতে হবে। একাধিক element থাকলে <div> বা Fragment (<></>) দিয়ে wrap করুন।' },
    ]
  },

  {
    id: 'components',
    section: 'মূল ধারণা',
    title: 'Component তৈরি',
    level: 'beginner',
    readTime: '১২ মিনিট',
    intro: 'Component হলো React-এর building block। প্রতিটি component একটি স্বাধীন, পুনরায় ব্যবহারযোগ্য UI অংশ যা নিজের logic ও appearance নিয়ন্ত্রণ করে।',
    content: [
      { type: 'h2', text: 'Function Component' },
      { type: 'p', text: 'আধুনিক React-এ শুধু function component ব্যবহার করা হয়। এটি একটি সাধারণ JavaScript function যা JSX return করে:' },
      {
        type: 'code', lang: 'jsx',
        code: `// সরল function component
function Greeting() {
  return <h1>আস্সালামুয়ালাইকুম!</h1>;
}

// Arrow function দিয়েও লেখা যায়
const Greeting = () => {
  return <h1>আস্সালামুয়ালাইকুম!</h1>;
};

// App-এ ব্যবহার
function App() {
  return (
    <div>
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  );
}`
      },
      { type: 'h2', text: 'Props — ডেটা পাস করা' },
      { type: 'p', text: 'Props ব্যবহার করে parent component থেকে child component-এ ডেটা পাঠানো হয়। Props read-only — child সরাসরি props পরিবর্তন করতে পারে না।' },
      {
        type: 'code', lang: 'jsx',
        code: `// Props গ্রহণ করার তিনটি পদ্ধতি

// পদ্ধতি ১: props object
function Card(props) {
  return <h2>{props.title}</h2>;
}

// পদ্ধতি ২: destructuring (সবচেয়ে জনপ্রিয়)
function Card({ title, description, price }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <span>৳{price}</span>
    </div>
  );
}

// পদ্ধতি ৩: Default props
function Card({ title, price = 0 }) {
  return <div>{title} — ৳{price}</div>;
}

// ব্যবহার
<Card
  title="বিরিয়ানি"
  description="স্পেশাল হায়দ্রাবাদি বিরিয়ানি"
  price={250}
/>`
      },
      { type: 'h2', text: 'Children Props' },
      {
        type: 'code', lang: 'jsx',
        code: `// children prop দিয়ে nested content পাস করা
function Container({ children, title }) {
  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="content">{children}</div>
    </div>
  );
}

// ব্যবহার
<Container title="আমার কার্ড">
  <p>এই content children prop হিসেবে যাবে</p>
  <button>ক্লিক করুন</button>
</Container>`
      },
      { type: 'callout', variant: 'tip', icon: '♡', title: 'নামকরণ নিয়ম', text: 'Component-এর নাম সবসময় বড় হাতে (PascalCase) শুরু করুন। যেমন: UserCard, NavBar, LoginForm। ছোট হাতে শুরু হলে React HTML element মনে করবে।' },
    ]
  },

  {
    id: 'state',
    section: 'মূল ধারণা',
    title: 'useState Hook',
    level: 'beginner',
    readTime: '১৫ মিনিট',
    intro: 'State হলো component-এর নিজস্ব ডেটা যা সময়ের সাথে পরিবর্তন হতে পারে। useState hook দিয়ে function component-এ state সংরক্ষণ করা হয়।',
    content: [
      { type: 'h2', text: 'useState এর মূল ব্যবহার' },
      {
        type: 'code', lang: 'jsx',
        code: `import { useState } from 'react';

function Counter() {
  // [currentValue, setterFunction] = useState(initialValue)
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>গণনা: {count}</h2>
      <button onClick={() => setCount(count + 1)}>বাড়ান ➕</button>
      <button onClick={() => setCount(count - 1)}>কমান ➖</button>
      <button onClick={() => setCount(0)}>রিসেট 🔄</button>
    </div>
  );
}`
      },
      { type: 'h2', text: 'বিভিন্ন ধরনের State' },
      {
        type: 'code', lang: 'jsx',
        code: `function Examples() {
  // Number state
  const [age, setAge] = useState(25);

  // String state
  const [name, setName] = useState('');

  // Boolean state
  const [isVisible, setIsVisible] = useState(false);

  // Array state
  const [items, setItems] = useState(['চা', 'কফি']);

  // Object state
  const [user, setUser] = useState({
    name: 'করিম',
    email: 'karim@example.com'
  });

  return (
    <div>
      <p>{name || 'নাম লিখুন...'}</p>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="আপনার নাম"
      />
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'লুকান' : 'দেখান'}
      </button>
      {isVisible && <p>আমি দৃশ্যমান!</p>}
    </div>
  );
}`
      },
      { type: 'h2', text: 'Array State আপডেট করা' },
      {
        type: 'code', lang: 'jsx',
        code: `function TodoList() {
  const [todos, setTodos] = useState(['React শেখা', 'Project বানানো']);
  const [input, setInput] = useState('');

  // নতুন item যোগ করা
  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, input]); // spread করে নতুন array
    setInput('');
  };

  // item মুছে ফেলা
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>যোগ করুন</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => removeTodo(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`
      },
      { type: 'callout', variant: 'danger', icon: '♡', title: 'সতর্কতা — State সরাসরি পরিবর্তন করবেন না!', text: 'count = count + 1 বা todos.push("new") লেখা ভুল। সবসময় setter function ব্যবহার করুন। না হলে React পরিবর্তন বুঝতে পারবে না এবং UI আপডেট হবে না।' },
    ]
  },

  {
    id: 'events',
    section: 'মূল ধারণা',
    title: 'Events ও Forms',
    level: 'beginner',
    readTime: '১২ মিনিট',
    intro: 'React-এ events সামলানো HTML-এর মতোই, তবে কিছু পার্থক্য আছে। JSX-এ event handler camelCase-এ লেখা হয় এবং function reference পাস করা হয়।',
    content: [
      { type: 'h2', text: 'Common Events' },
      {
        type: 'code', lang: 'jsx',
        code: `function EventExamples() {
  const handleClick = (e) => {
    console.log('ক্লিক হয়েছে!', e.target);
  };

  const handleHover = () => {
    console.log('মাউস এসেছে!');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter চাপা হয়েছে!');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>ক্লিক করুন</button>
      <div onMouseEnter={handleHover}>হভার করুন</div>
      <input onKeyDown={handleKeyPress} placeholder="Enter চাপুন" />
    </div>
  );
}`
      },
      { type: 'h2', text: 'Controlled Form' },
      { type: 'p', text: 'React-এ form input-এর value state-এ রাখাকে "controlled component" বলে। এটি সবচেয়ে ভালো পদ্ধতি:' },
      {
        type: 'code', lang: 'jsx',
        code: `function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: 'ঢাকা',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // পেজ reload বন্ধ করে
    console.log('ফর্ম জমা:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="আপনার নাম"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="ইমেইল"
      />
      <select name="city" value={formData.city} onChange={handleChange}>
        <option>ঢাকা</option>
        <option>চট্টগ্রাম</option>
        <option>সিলেট</option>
      </select>
      <label>
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
        />
        শর্তাবলী মানি
      </label>
      <button type="submit" disabled={!formData.agree}>
        নিবন্ধন করুন
      </button>
    </form>
  );
}`
      },
      { type: 'callout', variant: 'info', icon: '♡', title: 'preventDefault কেন?', text: 'form submit হলে browser স্বয়ংক্রিয়ভাবে পেজ reload করে। e.preventDefault() এটি বন্ধ করে দেয়, তাই React state নষ্ট হয় না।' },
    ]
  },

  {
    id: 'lists',
    section: 'মূল ধারণা',
    title: 'List ও Key',
    level: 'beginner',
    readTime: '৮ মিনিট',
    intro: 'Array থেকে UI তৈরি করতে React-এ map() method ব্যবহার করা হয়। প্রতিটি item-এ অবশ্যই unique key prop দিতে হবে।',
    content: [
      { type: 'h2', text: 'Array থেকে List তৈরি' },
      {
        type: 'code', lang: 'jsx',
        code: `const foods = [
  { id: 1, name: 'ভাত', calories: 130 },
  { id: 2, name: 'বিরিয়ানি', calories: 350 },
  { id: 3, name: 'খিচুড়ি', calories: 200 },
];

function FoodList() {
  return (
    <ul>
      {foods.map(food => (
        // key prop অবশ্যই দিতে হবে!
        <li key={food.id}>
          {food.name} — {food.calories} ক্যালরি
        </li>
      ))}
    </ul>
  );
}`
      },
      { type: 'h2', text: 'Key কেন দরকার?' },
      { type: 'p', text: 'Key দিয়ে React বুঝতে পারে কোন item পরিবর্তন, যোগ বা মুছে ফেলা হয়েছে। এটি performance-এর জন্য অনেক গুরুত্বপূর্ণ।' },
      { type: 'callout', variant: 'warn', icon: '♡', title: 'index key ব্যবহার এড়িয়ে চলুন', text: 'key={index} ব্যবহার করলে list-এর item যোগ/মুছলে বাগ হতে পারে। সবসময় unique ID ব্যবহার করুন।' },
      { type: 'h2', text: 'Filtering ও Sorting' },
      {
        type: 'code', lang: 'jsx',
        code: `function FilteredList() {
  const [search, setSearch] = useState('');
  const cities = ['ঢাকা', 'চট্টগ্রাম', 'সিলেট', 'রাজশাহী', 'খুলনা'];

  const filtered = cities.filter(city =>
    city.includes(search)
  );

  return (
    <div>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="শহর খুঁজুন..."
      />
      <ul>
        {filtered.map(city => (
          <li key={city}>{city}</li>
        ))}
      </ul>
      <p>মোট: {filtered.length}টি শহর</p>
    </div>
  );
}`
      },
    ]
  },

  // ===== SECTION 3: Hooks =====
  {
    id: 'useeffect',
    section: 'Hooks গভীরে',
    title: 'useEffect Hook',
    level: 'intermediate',
    readTime: '18 মিনিট',
    intro: 'useEffect hook ব্যবহার করে component render হওয়ার পর side effects চালানো হয়। API call, event listener, timer — এসব কাজে useEffect ব্যবহার হয়।',
    content: [
      { type: 'h2', text: 'useEffect-এর তিন রূপ' },
      {
        type: 'code', lang: 'jsx',
        code: `import { useState, useEffect } from 'react';

function MyComponent() {
  // ১. প্রতি render-এ চলে (dependency array নেই)
  useEffect(() => {
    console.log('প্রতিবার render হলে চলে');
  });

  // ২. শুধু প্রথমবার চলে (empty array)
  useEffect(() => {
    console.log('শুধু প্রথমবার (mount)');
  }, []);

  // ৩. নির্দিষ্ট value বদলালে চলে
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = \`গণনা: \${count}\`;
  }, [count]); // count বদলালে চলবে
}`
      },
      { type: 'h2', text: 'API থেকে ডেটা আনা' },
      {
        type: 'code', lang: 'jsx',
        code: `function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=5'
        );
        if (!res.ok) throw new Error('ডেটা আনতে সমস্যা হয়েছে');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) return <p>লোড হচ্ছে... ⏳</p>;
  if (error) return <p>ত্রুটি: {error}</p>;

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`
      },
      { type: 'h2', text: 'Cleanup Function' },
      {
        type: 'code', lang: 'jsx',
        code: `function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup: component unmount হলে interval বন্ধ করে
    return () => clearInterval(interval);
  }, []);

  return <p>সময়: {seconds} সেকেন্ড</p>;
}`
      },
      { type: 'callout', variant: 'info', icon: '♡', title: 'Cleanup কখন দরকার?', text: 'Timer, WebSocket connection, event listener — এগুলো শেষ না করলে memory leak হয়। useEffect-এ return করা cleanup function component unmount হলে চলে।' },
    ]
  },

  {
    id: 'useref',
    section: 'Hooks গভীরে',
    title: 'useRef ও useId',
    level: 'intermediate',
    readTime: '১২ মিনিট',
    intro: 'useRef দুটো কাজে ব্যবহার হয়: DOM element directly access করতে, এবং re-render না করে value সংরক্ষণ করতে।',
    content: [
      { type: 'h2', text: 'DOM Access করা' },
      {
        type: 'code', lang: 'jsx',
        code: `import { useRef, useEffect } from 'react';

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Component load হলেই input-এ focus যাবে
    inputRef.current.focus();
  }, []);

  const handleClear = () => {
    inputRef.current.value = ''; // সরাসরি DOM ম্যানিপুলেশন
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="স্বয়ংক্রিয়ভাবে focus হবে" />
      <button onClick={handleClear}>মুছুন</button>
    </div>
  );
}`
      },
      { type: 'h2', text: 'Re-render ছাড়া Value রাখা' },
      {
        type: 'code', lang: 'jsx',
        code: `function StopWatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null); // re-render হলেও মান থাকে

  const start = () => {
    setRunning(true);
    intervalRef.current = setInterval(() => {
      setTime(t => t + 1);
    }, 100);
  };

  const stop = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <h2>{(time / 10).toFixed(1)} সেকেন্ড</h2>
      <button onClick={running ? stop : start}>
        {running ? 'থামান' : 'শুরু করুন'}
      </button>
    </div>
  );
}`
      },
    ]
  },

  {
    id: 'context',
    section: 'Hooks গভীরে',
    title: 'Context API',
    level: 'intermediate',
    readTime: '২০ মিনিট',
    intro: 'Context API ব্যবহার করে props drilling ছাড়াই যেকোনো component-এ ডেটা শেয়ার করা যায়। Theme, language, user authentication — এই ধরনের global ডেটার জন্য উপযুক্ত।',
    content: [
      { type: 'h2', text: 'Context তৈরি ও ব্যবহার' },
      {
        type: 'code', lang: 'jsx',
        code: `import { createContext, useContext, useState } from 'react';

// ১. Context তৈরি করুন
const ThemeContext = createContext('light');

// ২. Provider তৈরি করুন
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ৩. App-এ Provider wrap করুন
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

// ৪. যেকোনো child-এ ব্যবহার করুন
function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header style={{ background: theme === 'dark' ? '#333' : '#fff' }}>
      <button onClick={toggleTheme}>
        {theme === 'dark' ? '☀️ লাইট' : '🌙 ডার্ক'}
      </button>
    </header>
  );
}`
      },
      { type: 'h2', text: 'Custom Hook দিয়ে Context সহজ করুন' },
      {
        type: 'code', lang: 'jsx',
        code: `// useTheme custom hook
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme অবশ্যই ThemeProvider-এর ভেতরে ব্যবহার করতে হবে');
  }
  return context;
}

// এখন সহজে ব্যবহার করা যাবে
function Button() {
  const { theme } = useTheme(); // useContext(ThemeContext) না লিখলেও হবে
  return <button className={theme}>বাটন</button>;
}`
      },
      { type: 'callout', variant: 'warn', icon: '♡', title: 'Context-এর সীমাবদ্ধতা', text: 'Context পরিবর্তন হলে সব consumer re-render হয়। বড় অ্যাপে performance সমস্যা হতে পারে। সেক্ষেত্রে Zustand বা Redux Toolkit ব্যবহার বিবেচনা করুন।' },
    ]
  },

  {
    id: 'custom-hooks',
    section: 'Hooks গভীরে',
    title: 'Custom Hooks',
    level: 'intermediate',
    readTime: '২০ মিনিট',
    intro: 'Custom Hook হলো একটি JavaScript function যার নাম "use" দিয়ে শুরু হয় এবং এর ভেতরে অন্য hooks ব্যবহার করা যায়। এটি component logic পুনরায় ব্যবহারের সেরা উপায়।',
    content: [
      { type: 'h2', text: 'useFetch — API Call Hook' },
      {
        type: 'code', lang: 'jsx',
        code: `// hooks/useFetch.js
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetch(url, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error('HTTP error: ' + res.status);
        return res.json();
      })
      .then(d => { setData(d); setLoading(false); })
      .catch(e => {
        if (e.name !== 'AbortError') {
          setError(e.message);
          setLoading(false);
        }
      });

    return () => controller.abort(); // cleanup
  }, [url]);

  return { data, loading, error };
}

// ব্যবহার — কত সহজ!
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(
    \`https://api.example.com/users/\${userId}\`
  );

  if (loading) return <p>লোড হচ্ছে...</p>;
  if (error) return <p>ত্রুটি: {error}</p>;
  return <h1>{user.name}</h1>;
}`
      },
      { type: 'h2', text: 'useLocalStorage Hook' },
      {
        type: 'code', lang: 'jsx',
        code: `function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}

// ব্যবহার
function Settings() {
  const [lang, setLang] = useLocalStorage('language', 'bn');
  return (
    <select value={lang} onChange={e => setLang(e.target.value)}>
      <option value="bn">বাংলা</option>
      <option value="en">English</option>
    </select>
  );
}`
      },
      { type: 'h2', text: 'useDebounce Hook' },
      {
        type: 'code', lang: 'jsx',
        code: `// Search input-এ ব্যবহারের জন্য
function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

// ব্যবহার — typing বন্ধ হলে API call হবে
function SearchBox() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);
  const { data } = useFetch(\`/api/search?q=\${debouncedQuery}\`);
  // ...
}`
      },
    ]
  },

  // ===== SECTION 4: উন্নত =====
  {
    id: 'performance',
    section: 'উন্নত পর্যায়',
    title: 'Performance অপ্টিমাইজেশন',
    level: 'advanced',
    readTime: '২৫ মিনিট',
    intro: 'বড় React অ্যাপে অপ্রয়োজনীয় re-render পারফরম্যান্স কমিয়ে দেয়। useMemo, useCallback, এবং React.memo ব্যবহার করে এটি কমানো যায়।',
    content: [
      { type: 'h2', text: 'React.memo — Component Memoization' },
      { type: 'p', text: 'React.memo দিয়ে wrap করলে props পরিবর্তন না হলে component re-render হয় না:' },
      {
        type: 'code', lang: 'jsx',
        code: `import { memo, useState, useCallback, useMemo } from 'react';

// memo দিয়ে wrap করা component
const ProductCard = memo(({ product, onBuy }) => {
  console.log('ProductCard render:', product.name);
  return (
    <div>
      <h3>{product.name}</h3>
      <p>৳{product.price}</p>
      <button onClick={() => onBuy(product.id)}>কিনুন</button>
    </div>
  );
});

function Shop() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');

  const products = [
    { id: 1, name: 'শার্ট', price: 500 },
    { id: 2, name: 'প্যান্ট', price: 800 },
  ];

  // useCallback: function reference stable রাখে
  const handleBuy = useCallback((id) => {
    setCart(prev => [...prev, id]);
  }, []); // dependency নেই, একবারই তৈরি হবে

  // useMemo: expensive calculation cache করে
  const filteredProducts = useMemo(() => {
    return products.filter(p => p.name.includes(search));
  }, [search]); // search বদলালেই recalculate

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      <p>কার্ট: {cart.length}টি পণ্য</p>
      {filteredProducts.map(p => (
        <ProductCard key={p.id} product={p} onBuy={handleBuy} />
      ))}
    </div>
  );
}`
      },
      { type: 'h2', text: 'Lazy Loading ও Code Splitting' },
      {
        type: 'code', lang: 'jsx',
        code: `import { lazy, Suspense } from 'react';

// Component গুলো lazily load হবে
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Suspense fallback={<div>লোড হচ্ছে...</div>}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}`
      },
      { type: 'callout', variant: 'warn', icon: '♡', title: 'Premature Optimization এড়িয়ে চলুন', text: 'সব জায়গায় useMemo/useCallback দরকার নেই। আগে React DevTools দিয়ে কোথায় সমস্যা সেটা চিহ্নিত করুন, তারপর optimize করুন। অতিরিক্ত optimization কোড জটিল করে।' },
    ]
  },

  {
    id: 'reducer',
    section: 'উন্নত পর্যায়',
    title: 'useReducer ও State Management',
    level: 'advanced',
    readTime: '২২ মিনিট',
    intro: 'useReducer হলো useState-এর আরও শক্তিশালী বিকল্প। জটিল state logic, একাধিক sub-values, বা পূর্ববর্তী state-এর উপর নির্ভরশীল state-এর জন্য useReducer উপযুক্ত।',
    content: [
      { type: 'h2', text: 'useReducer মূল ধারণা' },
      {
        type: 'code', lang: 'jsx',
        code: `import { useReducer } from 'react';

// Reducer function: (state, action) => newState
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };

    case 'REMOVE_ITEM':
      const item = state.items.find(i => i.id === action.payload);
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload),
        total: state.total - item.price,
      };

    case 'CLEAR_CART':
      return { items: [], total: 0 };

    default:
      return state;
  }
}

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
  });

  const addProduct = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div>
      <h2>কার্ট ({cart.items.length} পণ্য)</h2>
      <p>মোট: ৳{cart.total}</p>
      <button onClick={() => addProduct({ id: 1, name: 'শার্ট', price: 500 })}>
        শার্ট যোগ করুন
      </button>
      <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>
        কার্ট খালি করুন
      </button>
    </div>
  );
}`
      },
      { type: 'callout', variant: 'tip', icon: '♡', title: 'useState বনাম useReducer', text: 'সরল state (toggle, counter) → useState। জটিল state logic, একাধিক values একসাথে update → useReducer। Redux ব্যবহার করলে useReducer-এর pattern আগে থেকে জানা থাকলে সুবিধা হয়।' },
    ]
  },

  {
    id: 'patterns',
    section: 'উন্নত পর্যায়',
    title: 'Advanced Patterns',
    level: 'advanced',
    readTime: '৩০ মিনিট',
    intro: 'Compound Components, Render Props, এবং Higher-Order Components — এই patterns বড় অ্যাপ্লিকেশনে code reusability এবং flexibility বাড়ায়।',
    content: [
      { type: 'h2', text: 'Compound Components Pattern' },
      {
        type: 'code', lang: 'jsx',
        code: `const TabContext = createContext();

function Tabs({ children, defaultTab = 0 }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabContext.Provider>
  );
}

Tabs.List = function TabList({ children }) {
  return <div className="tab-list">{children}</div>;
};

Tabs.Tab = function Tab({ index, children }) {
  const { activeTab, setActiveTab } = useContext(TabContext);
  return (
    <button
      className={activeTab === index ? 'active' : ''}
      onClick={() => setActiveTab(index)}
    >
      {children}
    </button>
  );
};

Tabs.Panel = function TabPanel({ index, children }) {
  const { activeTab } = useContext(TabContext);
  return activeTab === index ? <div>{children}</div> : null;
};

// ব্যবহার — অনেক flexible!
<Tabs defaultTab={0}>
  <Tabs.List>
    <Tabs.Tab index={0}>প্রোফাইল</Tabs.Tab>
    <Tabs.Tab index={1}>সেটিংস</Tabs.Tab>
    <Tabs.Tab index={2}>নোটিফিকেশন</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel index={0}><ProfileContent /></Tabs.Panel>
  <Tabs.Panel index={1}><SettingsContent /></Tabs.Panel>
  <Tabs.Panel index={2}><NotificationsContent /></Tabs.Panel>
</Tabs>`
      },
      { type: 'h2', text: 'Higher-Order Component (HOC)' },
      {
        type: 'code', lang: 'jsx',
        code: `// withAuth HOC — authentication protection
function withAuth(WrappedComponent) {
  return function AuthenticatedComponent(props) {
    const { user, loading } = useAuth();

    if (loading) return <p>চেক করা হচ্ছে...</p>;
    if (!user) return <Navigate to="/login" />;

    return <WrappedComponent {...props} user={user} />;
  };
}

// withErrorBoundary HOC
function withErrorBoundary(WrappedComponent, fallback) {
  return class extends React.Component {
    state = { hasError: false };
    static getDerivedStateFromError() { return { hasError: true }; }
    render() {
      if (this.state.hasError) return fallback;
      return <WrappedComponent {...this.props} />;
    }
  };
}

// ব্যবহার
const ProtectedDashboard = withAuth(Dashboard);
const SafeChart = withErrorBoundary(Chart, <p>চার্ট লোড হয়নি</p>);`
      },
    ]
  },

  // ===== SECTION 5: Routing =====
  {
    id: 'routing',
    section: 'React Router',
    title: 'React Router ব্যবহার',
    level: 'intermediate',
    readTime: '২০ মিনিট',
    intro: 'React Router হলো React-এ client-side routing-এর সবচেয়ে জনপ্রিয় লাইব্রেরি। এটি দিয়ে multi-page SPA তৈরি করা যায়।',
    content: [
      { type: 'h2', text: 'Installation ও Setup' },
      {
        type: 'code', lang: 'bash',
        code: `npm install react-router-dom`
      },
      { type: 'h2', text: 'Basic Routing' },
      {
        type: 'code', lang: 'jsx',
        code: `import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

// Pages
function Home() { return <h1>হোম পেজ</h1>; }
function About() { return <h1>আমাদের সম্পর্কে</h1>; }
function NotFound() { return <h1>404 — পেজ পাওয়া যায়নি</h1>; }

function BlogPost() {
  const { id } = useParams(); // URL থেকে id নেওয়া
  return <h1>ব্লগ পোস্ট #{id}</h1>;
}

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">হোম</Link>
        <Link to="/about">আমাদের সম্পর্কে</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}`
      },
      { type: 'h2', text: 'Protected Routes' },
      {
        type: 'code', lang: 'jsx',
        code: `import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem('token');

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// ব্যবহার
<Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>`
      },
    ]
  },

  // ===== SECTION 6: Project =====
  {
    id: 'project',
    section: 'প্রজেক্ট',
    title: 'Todo অ্যাপ তৈরি',
    level: 'project',
    readTime: '৪৫ মিনিট',
    intro: 'এই অধ্যায়ে আমরা একটি সম্পূর্ণ Todo অ্যাপ্লিকেশন তৈরি করব যেখানে সব মূল React concept ব্যবহার হবে — state, props, event handling, lists, এবং local storage।',
    content: [
      { type: 'h2', text: 'Features যা থাকবে' },
      { type: 'p', text: 'আমাদের Todo অ্যাপে থাকবে: নতুন task যোগ, সম্পন্ন করা, মুছে ফেলা, filter করা এবং local storage-এ save করা।' },
      { type: 'h2', text: 'সম্পূর্ণ কোড' },
      {
        type: 'code', lang: 'jsx',
        code: `import { useState, useEffect } from 'react';

// Custom hook for localStorage
function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initial;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

function TodoApp() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, done

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, {
      id: Date.now(),
      text: input,
      done: false,
      createdAt: new Date().toLocaleDateString('bn-BD'),
    }]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const filtered = todos.filter(t => {
    if (filter === 'active') return !t.done;
    if (filter === 'done') return t.done;
    return true;
  });

  const doneCount = todos.filter(t => t.done).length;

  return (
    <div className="todo-app">
      <h1>📝 আমার কাজের তালিকা</h1>
      <p>{doneCount}/{todos.length} সম্পন্ন</p>

      {/* Input */}
      <div className="add-todo">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTodo()}
          placeholder="নতুন কাজ লিখুন..."
        />
        <button onClick={addTodo}>যোগ করুন</button>
      </div>

      {/* Filter */}
      <div className="filters">
        {['all', 'active', 'done'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={filter === f ? 'active' : ''}
          >
            {f === 'all' ? 'সব' : f === 'active' ? 'বাকি' : 'সম্পন্ন'}
          </button>
        ))}
      </div>

      {/* List */}
      <ul>
        {filtered.map(todo => (
          <li key={todo.id} className={todo.done ? 'done' : ''}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <small>{todo.createdAt}</small>
            <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
          </li>
        ))}
        {filtered.length === 0 && (
          <p>কোনো কাজ নেই! 🎉</p>
        )}
      </ul>
    </div>
  );
}

export default TodoApp;`
      },
      { type: 'callout', variant: 'tip', icon: '♡', title: 'পরবর্তী পদক্ষেপ', text: 'এই Todo অ্যাপে আরও feature যোগ করতে পারেন: drag-and-drop sorting, due date, categories, এবং backend API দিয়ে data save করা।' },
    ]
  },
];

export const sections = [...new Set(chapters.map(c => c.section))];
