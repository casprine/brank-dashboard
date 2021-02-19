import { toast } from 'components/toast/Toaster';

const TestPage = () => {
  return (
    <p>
      Hello world
      <button
        onClick={() => toast.notify({ title: 'Casprine', position: 'bottom', type: 'success' })}
      >
        Click
      </button>
    </p>
  );
};

export default TestPage;
