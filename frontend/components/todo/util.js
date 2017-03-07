const uniqueId = () => {
  return new Date().getTime();
};

export default uniqueId;
// window.uniqueId = uniqueId;
