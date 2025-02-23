
import englishImg from "../../assets/images/english.png"
import frenchImg from "../../assets/images/french.png"
import catalanImg from "../../assets/images/catalan.png"
import spanishImg from "../../assets/images/spanish.png"

const LanguageContent = () => {
  return (
    <div>
     <h3 className="text-[30px] font-semibold text-themeBlack mb-8">
        Dashboard
      </h3>
      <form>
      {/* language-feild  */}
        <div className="language-feild">
          <input type="radio" id="english" name="language" defaultChecked />
          <label htmlFor="english">
            <img src={englishImg} alt="englishImg" />
            <p>English</p>
          </label>
        </div>
        <div className="language-feild">
          <input type="radio" id="spanish" name="language" />
          <label htmlFor="spanish">
            <img src={spanishImg} alt="spanishImg" />
            <p>Spanish</p>
          </label>
        </div>
        <div className="language-feild">
          <input type="radio" id="french" name="language" />
          <label htmlFor="french">
            <img src={frenchImg} alt="frenchImg" />
            <p>French</p>
          </label>
        </div>
        <div className="language-feild">
          <input type="radio" id="catalan" name="language" />
          <label htmlFor="catalan">
            <img src={catalanImg} alt="catalanImg" />
            <p>Catalan</p>
          </label>
        </div>
      </form>
    </div>
  );
};

export default LanguageContent;