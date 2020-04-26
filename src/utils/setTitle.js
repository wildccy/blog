export default (title, desc) => {
  const meta = document.getElementsByTagName('meta');
  if (title) {
    title = `${title} - Cheng`;
    document.title = title;
  } else {
    title = 'Cheng';
    document.title = title;
  }
};
