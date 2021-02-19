import toast from 'components/toast/Toaster';

const TestPage = () => {
  return (
    <p>
      Hello world
      <button
        onClick={() => toast.notify({ title: 'Casprine', position: 'bottom', type: 'success' })}
      >
        Bottom
      </button>
      <button onClick={() => toast.notify({ title: 'Casprine', position: 'top', type: 'error' })}>
        Top
      </button>
      <button
        onClick={() => toast.notify({ title: 'Casprine', position: 'bottomLeft', type: 'basic' })}
      >
        Bottom Left
      </button>
      <button
        onClick={() => toast.notify({ title: 'Casprine', position: 'bottom', type: 'success' })}
      >
        Bottom
      </button>
      <button
        onClick={() => toast.notify({ title: 'Casprine', position: 'bottom', type: 'success' })}
      >
        Bottom
      </button>
    </p>
  );
};

export default TestPage;
