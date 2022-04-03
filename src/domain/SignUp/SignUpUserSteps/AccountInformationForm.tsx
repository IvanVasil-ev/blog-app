import { NextRouter } from 'next/router';

import Button from '@components/common/Button';
import Divider from '@components/common/Divider';
import Input from '@components/common/Input';
import styles from '@styles/pages/SignUp.module.scss';

interface AccountInformationFormPropTypes {
  router: NextRouter;
  email: string;
  setEmail: (e: string) => void;
  name: string;
  setName: (e: string) => void;
  nameError: string;
  onNameFocus: () => void;
  surname: string;
  setSurname: (e: string) => void;
  surnameError: string;
  onSurnameFocus: () => void;
  age: string;
  setAge: (e: string) => void;
  profession: string;
  setProfession: (e: string) => void;
  isInformationValid: () => void;
}

const AccountInformationForm = ({
  router,
  email,
  setEmail,
  name,
  setName,
  nameError,
  onNameFocus,
  surname,
  setSurname,
  surnameError,
  onSurnameFocus,
  age,
  setAge,
  profession,
  setProfession,
  isInformationValid,
}: AccountInformationFormPropTypes) => {
  return (
    <>
      <Button customStyles={styles.goHomeButton} onClick={() => router.replace('/')}>
        ← Back to home
      </Button>
      <div className="card">
        <span className={styles.title}>Account information</span>
        <Divider />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          wrapperStyles={styles.input}
          label="Email"
          isDisabled
        />
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          wrapperStyles={styles.input}
          label="Name"
          error={nameError}
          onFocus={onNameFocus}
          isRequired
          placeholder="John"
        />
        <Input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          wrapperStyles={styles.input}
          label="Surname"
          error={surnameError}
          onFocus={onSurnameFocus}
          isRequired
          placeholder="Doe"
        />
        <Input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          wrapperStyles={styles.input}
          type="number"
          label="Age"
        />
        <Input
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          wrapperStyles={styles.input}
          label="Profession"
          placeholder="Frontend Developer"
        />
        <Button mode="contained" customStyles={styles.authButton} onClick={isInformationValid}>
          Next step →
        </Button>
      </div>
    </>
  );
};

export default AccountInformationForm;
