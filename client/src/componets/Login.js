import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className='Login-conteiner'>
          <section className='login-subscription'>
            <div className='login-input-areas'>
            <form>
            <h1 className='sign-up'> Cadastre-se e ganhe descontos exclusivos!</h1>
                <input className='login-input' name='name' type='name' placeholder='Nome Completo'/>
              </form>
              <form>
                <input className='login-input' name='email' type='email' placeholder='Seu Email'/>
              </form>
              <form>
              <input className='senha-input' name='senha' type='password' placeholder='Crie sua senha'/>
              </form>
                <button className='botao'>Cadastrar</button>
              <form>
              <h1 className='sign-up'> Faça login para acessar o conteúdo!</h1>
                <input className='login-input' name='email' type='email' placeholder='Email'/>
              </form>
              <form>
              <input className='senha-input' name='senha' type='password' placeholder='Senha'/>
              </form>
                <button className='botao'>Login</button>
            </div>
          </section>
        </div>
)
}

export default Login
