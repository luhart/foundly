import { useForm } from 'react-hook-form';
import styles from './dashboard.module.css'

export default function Company(){
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <>
    <h2>Let's figure out your company.</h2>
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        What would you like to name your company? <br/>
        <input type="text" placeholder="ex. My IG Handle" name="company name" ref={register({required: true, maxLength: 80})} />
      </label>
      <br/>
      <label>
        Business Address (this can be your current address)<br/>
        <input type="text" placeholder="" name="address" ref={register({required: true, maxLength: 80})} />
      </label>
      <br/>
      <label>
        Zip<br/>
        <input type="text" placeholder="" name="zip" ref={register({required: true, maxLength: 80})} />
      </label>
      <br/>
      <label>
        City<br/>
        <input type="text" placeholder="" name="city" ref={register({required: true, maxLength: 80})} />
      </label>
      <br/>
      <label>
        State<br/>
        <input type="text" placeholder="" name="city" ref={register({required: true, maxLength: 80})} />
      </label>
    </form>
    </>
  )
}