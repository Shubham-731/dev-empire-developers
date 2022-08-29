const Spinner = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-[35] bg-modal overflow-hidden transition-all" />

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
        <div className="w-12 h-12 border-4 border-white border-solid rounded-full animate-spin border-t-transparent"></div>
      </div>
    </>
  );
};

export default Spinner;
