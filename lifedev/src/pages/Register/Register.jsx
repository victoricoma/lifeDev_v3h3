
const Register = () => {
  return (
    <div>
      <h1>Cadastro LifeDev</h1>
      <form>
        <label>
          <span>Nome: </span>
          <input type="text" name='displayName' required placeholder='Nome do usuário' />
        </label>
        <label>
          <span>E-mail: </span>
          <input type="email" name='email' required placeholder='Entre com seu e-mail' />
        </label>
        <label>
          <span>Senha: </span>
          <input type="password" name='senha' required placeholder='Defina uma senha' />
        </label>
        <label>
          <span>Confirme: </span>
          <input type="password" name='confirmPassword' required placeholder='Confirme sua senha' />
        </label>
        <button className='btn'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Register