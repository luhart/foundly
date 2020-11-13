import { Button } from 'react-bootstrap'

const Form = ({ errorMessage, onSubmit }) => (
    <form onSubmit={onSubmit}>
      <label>
        <img src="/title.svg"/>
        <span>Email</span>
        <input type="email" name="email" required />
      </label>
  
      <div className="submit">
        <Button type="submit" variant="outline-dark">Sign Up / Login</Button>
      </div>
  
      {errorMessage && <p className="error">{errorMessage}</p>}
  
      <style jsx>{`
        form,
        label {
          display: flex;
          flex-flow: column;
        }
        label > span {
          font-weight: 600;
        }
        input {
          padding: 8px;
          margin: 0.3rem 0 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        img {
          margin-bottom: 1rem;
        }
        .submit {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          justify-content: space-between;
        }
        .submit > a {
          text-decoration: none;
        }
        .submit > button {
          padding: 0.5rem 1rem;
          cursor: pointer;
          background: #fff;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .submit > button:hover {
          border-color: #888;
        }
        .error {
          color: brown;
          margin: 1rem 0 0;
        }
      `}</style>
    </form>
  )
  
  export default Form