

## 🧠 Task #4: Dynamic Smart Form (Input Validations)

The **main branch** contains Task #4 — the Input Validations project.  
Click below to return to it:

👉 [⬅️ Back to main branch](https://github.com/Ahmed-RS-22/components/tree/main)
---
# 🧠 Task 5 Reusable Components Factory

A collection of **reusable, customizable React UI components** designed for scalability and flexibility across projects. This library demonstrates best practices in **component design**, **prop-driven customization**, and **TailwindCSS styling**.

---

## 📁 Folder Structure

```
src/
└── components/
    ├── ui/
    │   ├── Button.jsx
    │   ├── Input.jsx
    │   ├── Card.jsx
    │   ├── Modal.jsx
    │   ├── Alert.jsx
    │   ├── index.js
    │   └── utils/
    │       └── cn.js
```

---

## ⚙️ Setup

These components are built for **React** + **TailwindCSS**. Make sure your project has both configured.

Install (if you haven't already):

```bash
npm install react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then import components:

```jsx
import { Button, Input, Card, Modal, Alert } from "@/components/ui";
```

---

## 🧱 Components Reference

### 1️⃣ Button

A flexible button component supporting different colors, variants, sizes, and icons.

**Props**

| Prop        | Type                              | Default     | Description                                      |           |                            |
| ----------- | --------------------------------- | ----------- | ------------------------------------------------ | --------- | -------------------------- |
| `variant`   | `"solid"                          | "outline"   | "ghost"`                                         | `"solid"` | Controls button style type |
| `color`     | `string` (e.g. `"blue"`, `"red"`) | `"blue"`    | Color scheme from the colorMap                   |           |                            |
| `size`      | `"sm"                             | "md"        | "lg"`                                            | `"md"`    | Size preset                |
| `icon`      | `React.ElementType`               | `undefined` | Optional icon component (e.g. from lucide-react) |           |                            |
| `disabled`  | `boolean`                         | `false`     | Disables the button                              |           |                            |
| `onClick`   | `function`                        | `undefined` | Click handler                                    |           |                            |
| `className` | `string`                          | `""`        | Additional custom classes                        |           |                            |

**Usage**

```jsx
<Button color="green" variant="outline" size="lg" onClick={() => alert("Saved") }>
  Save Changes
</Button>
```

---

### 2️⃣ Input

A controlled input component with label, validation messages, and visual feedback.

**Props**

| Prop           | Type       | Default     | Description                                |
| -------------- | ---------- | ----------- | ------------------------------------------ |
| `label`        | `string`   | `""`        | Optional label above the input             |
| `type`         | `string`   | `"text"`    | HTML input type (e.g. `email`, `password`) |
| `value`        | `string`   | `undefined` | Controlled value                           |
| `defaultValue` | `string`   | `undefined` | Uncontrolled initial value                 |
| `onChange`     | `function` | `undefined` | Change handler (e) => void                 |
| `error`        | `string`   | `undefined` | Error message; red border shown            |
| `success`      | `string`   | `undefined` | Success message; green border shown        |
| `required`     | `boolean`  | `false`     | Shows required asterisk in label           |
| `disabled`     | `boolean`  | `false`     | Disables the input                         |
| `placeholder`  | `string`   | `""`        | Placeholder text                           |
| `className`    | `string`   | `""`        | Extra classes                              |

**Usage**

```jsx
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  required
  error={emailError}
  onChange={(e) => setEmail(e.target.value)}
/>
```

---

### 3️⃣ Card

A content container for products, articles, profiles, etc. Supports image, title, description, children, footer and variants.

**Props**

| Prop          | Type        | Default         | Description     |                     |
| ------------- | ----------- | --------------- | --------------- | ------------------- |
| `title`       | `string`    | `"title"`       | Card heading    |                     |
| `description` | `string`    | `"description"` | Card subheading |                     |
| `image`       | `string`    | `undefined`     | Image URL       |                     |
| `footer`      | `ReactNode` | `undefined`     | Footer area     |                     |
| `children`    | `ReactNode` | `undefined`     | Card body       |                     |
| `variant`     | `"elevated" | "outlined"`     | `"elevated"`    | Card visual variant |
| `className`   | `string`    | `""`            | Extra classes   |                     |

**Usage**

```jsx
<Card
  title="Coffee Mug"
  description="High-quality ceramic mug"
  image="/images/mug.jpg"
  footer={<span>$12.99</span>}
>
  <p>Perfect for mornings ☕</p>
</Card>
```

---

### 4️⃣ Modal

A simple modal overlay component. Use `isOpen` to control visibility and `onClose` to close it.

**Props**

| Prop        | Type        | Default         | Description                |
| ----------- | ----------- | --------------- | -------------------------- |
| `isOpen`    | `boolean`   | `false`         | Modal visibility           |
| `onClose`   | `function`  | `undefined`     | Close handler              |
| `title`     | `string`    | `undefined`     | Optional header title      |
| `bgClass`   | `string`    | `"bg-black/50"` | Overlay background classes |
| `className` | `string`    | `""`            | Modal container classes    |
| `children`  | `ReactNode` | `undefined`     | Modal content              |

**Usage**

```jsx
<Modal isOpen={show} onClose={() => setShow(false)} title="Confirm">
  <p>Are you sure?</p>
  <div className="flex gap-2 mt-4">
    <Button color="red">Delete</Button>
    <Button variant="outline" onClick={() => setShow(false)}>Cancel</Button>
  </div>
</Modal>
```

---

### 5️⃣ Alert

A dismissible alert for success/error/warning/info messages. Uses local state to hide when closed.

**Props**

| Prop        | Type        | Default     | Description           |         |          |              |
| ----------- | ----------- | ----------- | --------------------- | ------- | -------- | ------------ |
| `type`      | `"success"  | "error"     | "warning"             | "info"` | `"info"` | Visual style |
| `title`     | `string`    | `undefined` | Bold title            |         |          |              |
| `message`   | `string`    | `undefined` | Message body          |         |          |              |
| `children`  | `ReactNode` | `undefined` | Custom content        |         |          |              |
| `onClose`   | `function`  | `undefined` | Called when dismissed |         |          |              |
| `className` | `string`    | `""`        | Extra classes         |         |          |              |

**Usage**

```jsx
<Alert
  type="success"
  title="Saved"
  message="Your settings were saved."
  onClose={() => console.log('closed')}
/>
```

---

## 🧰 Utilities

### `cn()` — className utility

A small helper that joins class names conditionally.

```js
export const cn = (...classes) => classes.filter(Boolean).join(' ');
```

Usage in components: `className={cn('p-4', isActive && 'bg-blue-500')}`

---

## 📄 index.js (recommended)

Create `src/components/ui/index.js` to centralize exports:

```js
export { default as Button } from './Button';
export { default as Input } from './Input';
export { default as Card } from './Card';
export { default as Modal } from './Modal';
export { default as Alert } from './Alert';
```

Then import from `@/components/ui`.

---

## 🧪 Example Demo Page

Create a quick demo page to test components:

```jsx
import { useState } from 'react';
import { Button, Input, Card, Modal, Alert } from '@/components/ui';

export default function Demo() {
  const [show, setShow] = useState(false);
  return (
    <div className="p-8 space-y-6">
      <Alert type="info" message="Welcome to the UI Components Demo!" />

      <Card title="Reusable Components">
        <Input label="Name" placeholder="Your name" />
        <Button onClick={() => setShow(true)} className="mt-4">Open Modal</Button>
      </Card>

      <Modal isOpen={show} onClose={() => setShow(false)} title="Reusable Modal">
        <p>This modal can be reused anywhere.</p>
      </Modal>
    </div>
  );
}
```

---

## 💡 Suggestions & Next Steps

* Add **Storybook** for interactive visual documentation.
* Convert to **TypeScript** for stricter prop types.
* Add **unit tests** (React Testing Library + Jest).
* Extract theme/colors to a shared theme file so all components can read the same color map.
* Add keyboard accessibility (trap focus inside modal, `Esc` to close, ARIA attributes).

---

## 👨‍💻 Author

Built by **Ahmed Reda Salam** — for the *Reusable Components Factory* challenge.

---

If you want, I can also:

* create the `index.js` file for you,
* convert components to TypeScript,
* scaffold a basic Storybook setup,
* or generate a downloadable `README.md` file you can save locally.

Tell me which one you'd like next.
