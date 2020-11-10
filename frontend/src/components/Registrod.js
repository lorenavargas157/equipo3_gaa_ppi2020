import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export const Registro2 = () => {
  return (
    <div className="Registro py-5 text-center mb-4">
       
      <form className="form-signin">
        <img className="mb-4" src="./imgs/caremonda.png" alt="Logo" width="200" height="200" />
        <h1 class="h3 mb-3 font-weight-normal">Iniciar sesion</h1>
        <label for="inputEmail" class="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required=""
          autofocus=""
        />
        <label for="inputPassword" class="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required=""
        />
        <label for="inputPassword" class="sr-only">
          Confirm password
        </label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required=""
        />

        <div className="form-signin  ">
          <select name="priority" className="form-control py-2" value="" onChange="">
          <option>usuario</option>
         
          
           
          </select>
        </div>

        <div class="checkbox mb-2">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <p>
                <Link class="btn btn-secondary" to="/Mapa1" role="button">
                  <font className="Leisy:)">
                    <font className="Leisy:)">INICIAR</font>
                  </font>
                </Link>
              </p>
        
        <p class="mt-2 mb-3 text-muted">© look up guatape</p>
      </form>
    </div>
  );
};
export default withRouter(Registro2);

