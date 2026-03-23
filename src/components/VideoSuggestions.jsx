import styles from "./videoSuggestions.module.css";

export function VideoSuggestions() {
  const video_info = [
    {
      url: "https://i.ytimg.com/vi/xJ9oQKMZOh4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBcIuIb-RAAx351tb7M9i1cRQ4w5w",
      title: "SIDEMEN CHARITY MATCH 2026: THE DRAFT",
    },
  ];
  const suggestion = video_info.map((item) => (
    <div className={styles.container}>
      <img src={item.url} alt="" />
      <p>{item.title}</p>
    </div>
  ));

  return <div className={styles.videoSuggestions}>{suggestion}</div>;
}
