import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const AppLayout = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();
    // url을 바꿔주기
    navigate(`/movies?q=${keyword}`);
    setKeyword('');
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src="/JAEFLIX_LOGO.png" alt="재플릭스 로고 이미지" width={110} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="icon-link-hover nav-link text-white" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="icon-link-hover nav-link text-white" href="/movies">
                  Movies
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search" onSubmit={searchByKeyword}>
              <input
                class="form-control me-2 outline-success bg-success text-white"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default AppLayout;
