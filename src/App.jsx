import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Jeferson Conceição de Oliveira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dignissimos, repudiandae ipsam fugit reiciendis quas, nostrum perferendis officiis corrupti optio nulla rerum, mollitia eum iusto eaque beatae. Repellendus, corrupti ab."
          />

          <Post
            author="Jeferson Conceição de Oliveira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dignissimos, repudiandae ipsam fugit reiciendis quas, nostrum perferendis officiis corrupti optio nulla rerum, mollitia eum iusto eaque beatae. Repellendus, corrupti ab."
          />
        </main>
      </div>
    </>
  );
}
