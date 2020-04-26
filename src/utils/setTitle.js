export default (title, desc) => {
  const meta = document.getElementsByTagName('meta');
  if (title) {
    title = `${title} - WildCY`;
    document.title = title;
  } else {
    title = 'WildCY';
    document.title = title;
  }
};
