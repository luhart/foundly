import { useForm } from 'react-hook-form';
import styles from './dashboard.module.css'

export default function About() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>First we need a little information about you.</h2>
        <label>
          First name <br/>
          <input type="text" name="First name" ref={register({required: true, maxLength: 80})} />
        </label>
        <br/>
        <label>
          Last name
          <br/>
          <input type="text" name="Last name" ref={register({required: true, maxLength: 100})} />
        </label>
        <br/>
        <label>
        Where do you reside?
        <br/>
        <input type="text" name="Where do you reside?" ref={register} />
        </label>
        <br/>
        <label>
          What do you do?
          <br/>
          <textarea placeholder="I make cooking tutorials on tiktok" name="What do you do?" ref={register} />
        </label>
        <br/>
        <label>
        Provide any relevant social media handles
        <br/>
        <textarea placeholder="Tiktok: @yourcoolname" name="relevant handles" ref={register} />
        </label> 
        <br/>
        <label>
        Phone #
        <br/>
        <input type="text" name="phone" ref={register} />
        </label>
      </form>
    </>
  );
}
