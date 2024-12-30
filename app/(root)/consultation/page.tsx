export default function ConsultationPage() {
  return (
    <section className="max-w-[820px] lg:p-12 md:px-9 sm:px-6 px-2 py-9 mx-auto">
      <h2 className="section-title">Book your consultation</h2>
      <form className="flex flex-wrap">
        <div className="md:w-1/2 w-full px-2 mb-3">
          <input
            type="text"
            placeholder="First Name"
            className="w-full py-1.5 px-3 border border-black/10 rounded-sm"
          />
        </div>
        <div className="md:w-1/2 w-full px-2 mb-3">
          <input
            type="text"
            placeholder="Last Name"
            className="w-full py-1.5 px-3 border border-black/10 rounded-sm"
          />
        </div>
        <div className="w-full px-2 mb-3">
          <input
            type="text"
            placeholder="Address"
            className="w-full py-1.5 px-3 border border-black/10 rounded-sm"
          />
        </div>
        <div className="md:w-1/3 w-full px-2 mb-3">
          <input
            type="text"
            placeholder="Zip"
            className="w-full py-1.5 px-3 border border-black/10 rounded-sm"
          />
        </div>
        <div className="md:w-1/3 w-full px-2 mb-3">
          <input
            type="text"
            placeholder="City"
            className="w-full py-1.5 px-3 border border-black/10 rounded-sm"
          />
        </div>
        <div className="md:w-1/3 w-full px-2 mb-3">
          <input
            type="text"
            placeholder="State"
            className="w-full py-1.5 px-3 border border-black/10 rounded-sm"
          />
        </div>
        <div className="md:w-1/2 w-full px-2 mb-3">
          <input
            type="text"
            placeholder="Email"
            className="w-full py-1.5 px-3 border border-black/10 rounded-sm"
          />
        </div>
        <div className="md:w-1/2 w-full px-2 mb-3">
          <input
            type="tel"
            placeholder="Phone"
            className="w-full py-1.5 px-3 border border-black/10 rounded-sm"
          />
        </div>
        <div className="md:w-1/2 w-full px-2 mb-3">
          <input
            type="date"
            placeholder="Preferred Date"
            className="w-full py-1.5 px-3 border border-black/10 rounded-sm"
          />
        </div>
        <div className="md:w-1/2 w-full px-2 mb-3">
          <select className="w-full py-1.5 px-3 border border-black/10 rounded-sm">
            <option value="">Preferred Time</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
        <div className="w-full px-2 mb-3">
          <p>What products are you interested in?</p>
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-2 mt-2 text-sm">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="kitchen-design" id="kitchen-design" />
              <label htmlFor="kitchen-design">Kitchen Design</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" name="flooring" id="flooring" />
              <label htmlFor="flooring">Flooring</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" name="closet" id="closet" />
              <label htmlFor="closet">Closet Design</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" name="blinds" id="blinds" />
              <label htmlFor="blinds">Blinds</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" name="custom-art" id="custom-art" />
              <label htmlFor="custom-art">Custom Art</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" name="furniture" id="furniture" />
              <label htmlFor="furniture">Furniture</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" name="remodeling" id="remodeling" />
              <label htmlFor="remodeling">Remodeling</label>
            </div>
          </div>
        </div>
        <div className="w-full px-2 mb-3">
          <textarea
            placeholder="Comments"
            className="w-full h-20 py-1.5 px-3 border border-black/10 rounded-sm"
          ></textarea>
        </div>
        <div className="w-full text-center px-2 mb-3">
          <button className="btn-black">Send</button>
        </div>
      </form>
    </section>
  );
}
