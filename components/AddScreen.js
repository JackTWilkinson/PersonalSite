import { useForm } from 'react-hook-form';

const FormError = ({ errorMessage }) => {
    return <p className="text-red-300 mt-1">{errorMessage}</p>;
};

const AddScreen = ({ cards, AddCardFormProps }) => {
    const { register, handleSubmit, errors } = useForm();
    console.log("The addCard", AddCardFormProps);

    return (
        <form className="flex flex-col" onSubmit={handleSubmit(AddCardFormProps)}>
            <h1 className="font-bold">Add a Card</h1>
            <div>
                <div className="mb-4">
                    {/* {/ <InputSpacer> /} */}
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cardName" type="text" placeholder="cardName" name='cardName'
                        {...register('cardName', { required: true })} />
                        {/* {errors.firstName && (
                            <FormError errorMessage="First Name is required" />
                        )} */}
                    {/* {/ </InputSpacer> /} */}
                </div>
            </div>
            <div className="mb-4">
                {/* {/ <InputSpacer> /} */}
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="copies" type="number" placeholder="copies" name='copies'
                    {...register('copies', { required: true })} />
                    {/* {errors.lastName && (
                        <FormError errorMessage="First Name is required" />
                    )} */}
                {/* {/ </InputSpacer> /} */}
            </div>
            <div className="">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" id="btnAdd"
                type="submit">
                    Add
                </button>
            </div>
            {/* {/ <Script src="/main.js" strategy='lazyOnload' /> /} */}
        </form>
    );
}

export default AddScreen;