import { useState } from "react";


function App() {

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "",
    country: "India", streetAddress: "", city: "", state: "", postalCode: "",
    comments: false, candidate: false, offer: false, pushNotification: ""
  });

  function submitHandler(event) {
    event.preventDefault();
    console.log("Form Save and Print")
    console.log(formData);

  }

  return (
    <div className="flex items-center justify-center  w-full bg-teal-lighter">
      <div class=" bg-white rounded shadow-lg p-8 m-4">
        <h2 className="font-bold text-lg text-grey-darkest  uppercase text-center mb-3">User Detail Form</h2>
        <hr></hr>
        <form onSubmit={submitHandler}>
          <div class="flex flex-col mb-4 mt-2">
            <label htmlFor="firstName" className="font-bold text-lg text-grey-darkest">First Name</label><br />
            <input
              type="text"
              placeholder="Suyog"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              className="border py-2 px-3 text-grey-darkest"
            />
          </div>
          <div class="flex flex-col mb-4">
            <label htmlFor="lastName" className="font-bold text-lg text-grey-darkest">Last Name</label><br />
            <input
              type="text"
              placeholder="Muley"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              className="border py-2 px-3 text-grey-darkest"
            />
          </div>
          <div class="flex flex-col mb-4">
            <label htmlFor="email" className="font-bold text-lg text-grey-darkest">Email</label><br />
            <input
              type="email"
              placeholder="suyogvmuley@gmail.com"
              name="email"
              id="email"
              value={formData.email}
              onChange={changeHandler}
              className="border py-2 px-3 text-grey-darkest"
            />
          </div>
          <div class="flex flex-col mb-4">
            <label htmlFor="country" className="font-bold text-lg text-grey-darkest">Country</label><br />
            <select
              onChange={changeHandler}
              id="country"
              name="country"
              value={formData.country}
              className="border py-2 px-3 text-grey-darkest"
            >
              <option value="India">India</option>
              <option value="Japan">Japan</option>
              <option value="US">US</option>
              <option value="China">China</option>

            </select>
          </div>
          <div class="flex flex-col mb-4">
            <label htmlFor="streetAddress" className=" font-bold text-lg text-grey-darkest">Street Address</label><br />
            <input
              type="text"
              placeholder="Kate Wasti Road"
              name="streetAddress"
              id="streetAddress"
              value={formData.streetAddress}
              onChange={changeHandler}
              className="border py-2 px-3 text-grey-darkest"
            />
          </div>

          <div class="flex flex-col mb-4">
            <label htmlFor="city" className="font-bold text-lg text-grey-darkest">City</label><br />
            <input
              type="text"
              placeholder="Pune"
              name="city"
              id="city"
              value={formData.city}
              onChange={changeHandler}
              className="border py-2 px-3 text-grey-darkest"
            />
          </div>

          <div class="flex flex-col mb-4">
            <label htmlFor="state" className="font-bold text-lg text-grey-darkest">State</label><br />
            <input
              type="text"
              placeholder="Maharashtra"
              name="state"
              id="state"
              value={formData.state}
              onChange={changeHandler}
              className="border py-2 px-3 text-grey-darkest"
            />
          </div>
          <div class="flex flex-col mb-4">
            <label htmlFor="postalCode" className="font-bold text-lg text-grey-darkest">ZIP/Postal Code</label><br />
            <input
              type="text"
              placeholder="411012"
              name="postalCode"
              id="postalCode"
              value={formData.postalCode}
              onChange={changeHandler}
              className="border py-2 px-3 text-grey-darkest"
            />
          </div>
          <div class="flex flex-col mb-4">
            <fieldset >

              <legend className="font-bold text-lg text-grey-darkest">By Email</legend>
              <div className="flex">
                <input
                  type="checkbox"
                  id="comments"
                  name="comments"
                  checked={formData.comments}
                  onChange={changeHandler}
                  className="mb-6 px-8"
                />
                <div>
                  <label htmlFor="comments" className=" ml-4 font-bold text-lg text-grey-darkest">Comments</label>
                  <p className="ml-4">Get notified when someone posts a comment on a posting. </p>
                </div>
              </div>


              <div className="flex">
                <input
                  type="checkbox"
                  id="candidate"
                  name="candidate"
                  checked={formData.candidate}
                  onChange={changeHandler}
                  className="mb-6"
                />
                <div>
                  <label htmlFor="candidate" className="ml-4 font-bold text-lg text-grey-darkest">candidate </label>
                  <p className="ml-4">Get notified when a candidate applies for a job. </p>

                </div>
              </div>

              <div className="flex">
                <input
                  type="checkbox"
                  id="offer"
                  name="offer"
                  checked={formData.offer}
                  onChange={changeHandler}
                  className="mb-6"
                />
                <div>
                  <label htmlFor="offer" className="ml-4 font-bold text-lg text-grey-darkest">offer</label>
                  <p className="ml-4">Get notified when a candidate accepts or rejcts an offer </p>
                </div>
              </div>
            </fieldset>
          </div>

          <div class="flex flex-col mb-4">
            <fieldset>
              <legend className="font-bold text-lg text-grey-darkest">Push Notifications</legend>
              <p className=" text-md text-grey-darkest">These are delivered via SMS to your mobile phoane</p>
              <br />
              <input
                type="radio"
                name="pushNotification"
                id="pushEverything"
                value="Everything"
                onChange={changeHandler}
              />

              <label htmlFor="pushEverything" className="font-bold text-lg text-grey-darkest ml-4">  Everything</label>
              <br />
              <input
                type="radio"
                name="pushNotification"
                id="pushMail"
                value="same as email"
                onChange={changeHandler}
              />
              <label htmlFor="pushMail" className=" font-bold text-lg text-grey-darkest ml-4">  Same as Email</label>

              <br />
              <input
                type="radio"
                name="pushNotification"
                id="noPush"
                value="No Push Notifications"
                onChange={changeHandler}
              />
              <label htmlFor="noPush" className="font-bold text-lg text-grey-darkest ml-4">   No Push Notifications</label>
            </fieldset>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded ">Save</button>
          </div>
        </form>
      </div >
    </div >
  );
}

export default App;
