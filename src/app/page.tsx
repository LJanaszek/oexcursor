'use client'
import { useEffect, useState } from "react";
import { ResponseData } from "./api/userData/route";
import styles from "@/styles/page.module.scss";
import Popup from "@/components/popup";

export default function Home() {
  const [usersDataMain, setUsersDataMain] = useState<ResponseData[]>([]);
  const [usersData, setUsersData] = useState<ResponseData[]>(usersDataMain);
  const [isOpen, setIsOpen] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  useEffect(() => {
    fetch('/api/userData')
      .then(response => response.json())
      .then(data => { setUsersDataMain(data); setUsersData(data) });
  }, []);

  const filterUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredUsers = usersDataMain.filter(user => user.nazwa?.toLowerCase().includes(e.target.value.toLowerCase()));
    setUsersData(filteredUsers);
  }
  const showUsers = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    let count;
    switch (val) {
      case 'wszystko':
        count = usersDataMain.length;
        break;
      case '1':
        count = 3;
        break;
      case '2':
        count = 6;
        break;
      case '3':
        count = 9;
        break;
      case '4':
        count = 12;
        break;

    }
    e.target.disabled = true;
    setUsersData(usersDataMain.slice(0, count));
  }
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.inner}>
          <nav className={styles.headerNav}>
            <a href="#" className={styles.active}>Menu</a>
            <a href="#">Konfiguracja</a>
          </nav>
          <button onClick={() => { setIsOpen(!isOpen) }} aria-label="Menu"><i className="fas fa-bars" /></button>
        </div>
      </header>

      <aside className={!isOpen ? styles.sidebar : styles.sidebarOpen}>
        <a href="#" className={styles.sidebarItem} aria-label="Ustawienia">
          <i className="fas fa-cog"></i> </a>
        <a href="#" className={styles.sidebarItem}>
          <i className="fas fa-plus-circle"></i> Dodaj
        </a>
        <a href="#" className={styles.sidebarItem}>
          <i className="fas fa-edit"></i> Zmień
        </a>
        <a href="#" className={styles.sidebarItem}>
          <i className="fas fa-trash-alt"></i> Usuń
        </a>
        <a href="#" className={styles.sidebarItem + ' ' + styles.active}>
          <i className="fas fa-file-alt"></i> Przykład </a>
        <a href="#" className={styles.sidebarItem}>
          <i className="fas fa-upload"></i> Załaduj plik
        </a>
      </aside>
      <div className={styles.mainContent}>
        <h1>Lista Użytkowników</h1>
        <div className={styles.filterContainer}>

          <div className={styles.areaFilters}>
            <h2 className={styles.filterGroup} style={{ margin: "0" }}>
              Filtry:
            </h2>
            <div className={styles.filterGroup}>
              <label htmlFor="nazwa">Nazwa :</label>
              <input type="text" id="nazwa" name="nazwa" onChange={filterUsers} />
            </div>
            {/* {showSelect &&
              <div className={styles.filterGroup}>
                <label htmlFor="show">Pokaż:</label>
                <select id="show" name="show" onChange={(e) => { showUsers(e) }}>
                  <option value="0">Wszystko</option>
                  <option value="1">3</option>
                  <option value="2">6</option>
                  <option value="3">9</option>
                  <option value="4">12</option>
                </select>
              </div>} */}
          </div>
          <div className={styles.usersFilterInfo}>
            <div className={styles.filterGroup}>
              {/* <p>
                Liczba użytkowników: <span>{usersData.length}</span>
              </p> */}
              <p>
                Liczba wszystkich użytkowników: <span>{usersDataMain.length}</span>
              </p>
              <p>
                Liczba użytkowników bez wprowadzonych danych: <span>{usersData.filter(user => !user.imie || !user.nazwisko || !user.email).length}</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.dataTableContainer}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th className={styles.lp}>LP</th>
                <th className={styles.name}>Imię</th>
                <th className={styles.surrname}>Nazwisko</th>
                <th className={styles.login}>login</th>
                <th className={styles.description}>Opis</th>
                <th className={styles.fullName}>Nazwa</th>
                <th className={styles.email}>Email</th>
                <th className={styles.info}>More info</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user, index) => (
                <tr key={index}>
                  <td className={styles.lp}>{index + 1}</td>
                  <td className={styles.name}>{user.imie ?? 'not provided'}</td>
                  <td className={styles.surrname}>{user.nazwisko ?? 'not provided'}</td>
                  <td className={styles.login}>{user.login ?? 'not provided'}</td>
                  <td className={styles.description}>{user.opis ?? 'not provided'}</td>
                  <td className={styles.fullName}>{user.nazwa ?? 'not provided'}</td>
                  <td className={styles.email}>{user.email ?? 'not provided'}</td>
                  <td className={styles.info}>
                    <Popup userInfo={user} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.footerLogo}>
          INSPIR
        </div>
      </div>

    </main>
  );
}
