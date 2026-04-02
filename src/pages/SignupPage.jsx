import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './SignupPage.module.css';

const navItems = [
  { label: '경매방 생성', to: '#' },
  { label: '경매방 입장', to: '#', active: true },
  { label: '매물 관리', to: '#' },
  { label: '사용자 관리', to: '#' },
  { label: '이용 가이드', to: '#' },
];

export default function SignupPage() {
  const [form, setForm] = useState({
    userId: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  });
  const [idChecked, setIdChecked] = useState(false);
  const passwordMatch = form.passwordConfirm && form.password === form.passwordConfirm;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === 'userId') setIdChecked(false);
  };

  const handleCheckDuplicate = () => {
    if (form.userId.trim()) {
      setIdChecked(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.userId || !form.password || !form.passwordConfirm || !form.nickname) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    if (form.password !== form.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    alert('회원가입이 완료되었습니다!');
  };

  return (
    <div className={styles.page}>
      <Header navItems={navItems} />

      <div className={styles.layout}>
        <Sidebar activeItem="Home" />

        <main className={styles.main}>
          <form className={styles.form} onSubmit={handleSubmit}>
            {/* ID */}
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="userId">ID</label>
              <div className={styles.row}>
                <input
                  className={styles.input}
                  type="text"
                  id="userId"
                  name="userId"
                  placeholder="Input text"
                  value={form.userId}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className={styles.btnSmall}
                  onClick={handleCheckDuplicate}
                >
                  중복 확인
                </button>
              </div>
              {idChecked && (
                <div className={styles.hint}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>사용 가능한 ID입니다</span>
                </div>
              )}
            </div>

            {/* 비밀번호 */}
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="password">비밀번호</label>
              <input
                className={styles.input}
                type="password"
                id="password"
                name="password"
                placeholder="Input text"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            {/* 비밀번호 확인 */}
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="passwordConfirm">비밀번호확인</label>
              <input
                className={styles.input}
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="Input text"
                value={form.passwordConfirm}
                onChange={handleChange}
              />
              {passwordMatch && (
                <div className={styles.hint}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Password 일치</span>
                </div>
              )}
            </div>

            {/* 닉네임 */}
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="nickname">닉네임</label>
              <input
                className={styles.input}
                type="text"
                id="nickname"
                name="nickname"
                placeholder="Input text"
                value={form.nickname}
                onChange={handleChange}
              />
            </div>

            {/* 회원가입 버튼 */}
            <button type="submit" className={styles.btnSubmit}>
              회원가입
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
