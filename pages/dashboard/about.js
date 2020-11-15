import { useForm } from 'react-hook-form';

export default function About() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <>
      <h2>First we need a little information about yourself.</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First name <br/>
          <input type="text" placeholder="ex. John" name="First name" ref={register({required: true, maxLength: 80})} />
        </label>
        <br/>
        <label>
          Last name
          <br/>
          <input type="text" placeholder="ex. Smith" name="Last name" ref={register({required: true, maxLength: 100})} />
        </label>
        <br/>
        <label>
        Where do you reside?
        <br/>
        <input type="text" placeholder="ex. Seattle, WA" name="Where do you reside?" ref={register} />
        </label>
        <br/>
        <label>
          What do you do?
          <br/>
          <textarea placeholder="ex. I make cooking tutorials on tiktok" name="What do you do?" ref={register} />
        </label>
        <br/>
        <label>
        Provide any relevant social media handles
        <br/>
        <textarea placeholder="Tiktok: @yourcoolname" name="relevant handles" ref={register} />
        </label> 
      </form>
    </>
  );
}
