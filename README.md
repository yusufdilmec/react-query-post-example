# React Query Post Feed 🚀

A modern social media feed application featuring infinite scroll, optimistic updates, and state management with TanStack Query (React Query).

![React](https://img.shields.io/badge/React-19.2.0-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?logo=typescript)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-Latest-ff4154)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38bdf8?logo=tailwindcss)

## ✨ Features

- ⚡ **Infinite Scroll** - Automatic page loading with endless scrolling
- 💾 **Optimistic Updates** - Instant UI updates with like functionality
- 🎨 **Modern UI/UX** - Responsive and elegant design with Tailwind CSS
- 🔄 **Smart Caching** - Intelligent data caching with TanStack Query
- 📱 **Responsive Design** - Perfect display on all devices
- ⚙️ **TypeScript** - Type-safe code structure
- 🎯 **Intersection Observer** - Performance-optimized scroll management

## 🛠️ Technologies

- **React 19** - UI library
- **TypeScript** - Type safety
- **TanStack Query (React Query)** - Server state management
- **Axios** - HTTP requests
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool
- **JSONPlaceholder API** - Mock data

## 📦 Installation

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yusufdilmec/react-query-post-feed.git
cd react-query-post-feed

# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Linting
npm run lint
```

### Manual Installation (From Scratch)

If you want to set up the project from scratch:

```bash
# Create React + TypeScript project with Vite
npm create vite@latest my-project -- --template react-ts
cd my-project

# Install base dependencies
npm install

# TanStack Query (React Query) - Server state management
npm install @tanstack/react-query

# TanStack Query DevTools - Development tools
npm install @tanstack/react-query-devtools

# Axios - HTTP client
npm install axios

# Tailwind CSS - Styling
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# TypeScript types
npm install -D @types/node
```

### Required Dependencies

**Production Dependencies:**

```json
{
  "@tanstack/react-query": "^5.x.x",
  "@tanstack/react-query-devtools": "^5.x.x",
  "axios": "^1.x.x",
  "react": "^19.2.0",
  "react-dom": "^19.2.0"
}
```

**Dev Dependencies:**

```json
{
  "@types/node": "^24.x.x",
  "@types/react": "^19.x.x",
  "@types/react-dom": "^19.x.x",
  "@vitejs/plugin-react": "^5.x.x",
  "autoprefixer": "^10.x.x",
  "eslint": "^9.x.x",
  "postcss": "^8.x.x",
  "tailwindcss": "^3.x.x",
  "typescript": "~5.9.3",
  "vite": "^7.x.x"
}
```

## 🚀 Usage

The application will run at `http://localhost:5173`.

### Key Features

1. **Infinite Scrolling**: New posts automatically load as you scroll down
2. **Like/Unlike**: Click the heart icon on post cards to like them
3. **Optimistic Updates**: Like actions are instantly reflected in the UI
4. **Error Handling**: Automatic rollback on API errors

## 📁 Project Structure

```
src/
├── components/
│   └── PostCard.tsx          # Post card component
├── hooks/
│   ├── usePosts.ts           # Infinite query hook
│   └── useLikedPost.ts       # Like mutation hook
├── services/
│   └── api.ts                # API services
├── types/
│   └── types.ts              # TypeScript type definitions
├── App.tsx                   # Main application component
└── main.tsx                  # Application entry point
```

## 🎯 Code Quality

### Custom Hooks

**usePosts** - Optimized data fetching for infinite scroll:

```typescript
const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = usePosts();
```

**useLikedPost** - Like operation with optimistic updates:

```typescript
const { mutate } = useLikedPost();
mutate({ id: postId, isLiked: true });
```

### Best Practices

- ✅ Logic separation with custom hooks
- ✅ Type safety with TypeScript
- ✅ UX improvement with optimistic updates
- ✅ Error handling and rollback mechanism
- ✅ Performance optimization with Intersection Observer
- ✅ Consistent styling with Tailwind CSS

## 🔧 Configuration

### TanStack Query

```typescript
// Stale time: 2 minutes
// Automatic refetch on window focus
// Optimistic updates enabled
```

### API Endpoints

```
Base URL: https://jsonplaceholder.typicode.com
GET  /posts?_page={page}&_limit=9  - Post list
```

## 🎨 UI/UX Features

- Skeleton loading states
- Smooth animations and transitions
- Hover effects
- Responsive grid layout (1/2/3 columns)
- Loading spinners
- End of feed indicator

## 📈 Performance

- Lazy loading for visible content only
- Query caching to prevent repeated requests
- Optimistic updates to hide server latency
- Debounced scroll events

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


This project is licensed under the MIT License.

## 👨‍💻 Developer

GitHub: [@yusufdilmec](https://github.com/yusufdilmec)

---

⭐ If you liked this project, don't forget to give it a star!
