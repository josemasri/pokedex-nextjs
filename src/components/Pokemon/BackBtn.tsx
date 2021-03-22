import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

export const BackBtn = () => {
  const router = useRouter();

  const goBack = () => router.back();

  return (
      <button className="back-btn" onClick={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
      </button>
  );
};
