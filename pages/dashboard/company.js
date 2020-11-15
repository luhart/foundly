import { useForm } from 'react-hook-form';

export default function Company(){
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <>
    <h2>Let's figure out your company.</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        What would you like to name your company? <br/>
        <input type="text" placeholder="ex. My IG Handle" name="company name" ref={register({required: true, maxLength: 80})} />
      </label>
    </form>
    </>
  )
}