import "./global.css";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getFetch } from "@trpc/client";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { trpc } from "./utils/trpc";

function AppContent() {
  const hello = trpc.sayHello.useQuery();

  const user = {
    name: "santiago",
    email: "santiagotest@gmail.com",
    photo: "kappa.png",
    password: "Torgugas12!123",
    passwordConfirm: "Torgugas12!123",
  };

  const userMutation = trpc.registerUser.useMutation();

  return (
    <div className="container mx-auto rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
      <p className="text-lg">{hello.data?.message}</p>

      <button
        onClick={() => {
          userMutation.mutate(user);
        }}
      >
        {" "}
        Register user{" "}
      </button>
    </div>
  );
}

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      })
  );

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink(),
        httpBatchLink({
          url: "http://localhost:8000/api/trpc",
          fetch: async (input, init?) => {
            const fetch = getFetch();
            return fetch(input, {
              ...init,
              credentials: "include",
            });
          },
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
