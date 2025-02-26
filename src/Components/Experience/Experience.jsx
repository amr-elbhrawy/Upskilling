import { FaPencilAlt } from "react-icons/fa";
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <div className="experience">
        <p className="experience-title">Experience </p>
        <h2 className="experience-heading">WORK EXPERIENCE</h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon timeline-icon-1">
              <FaPencilAlt />
            </div>
            <div className="timeline-content ">
              <h3>
                Full Stack Developer <span>(2017-2018)</span>
              </h3>
              <p>
                Tolerably earnestly middleton extremely distrusts she boy now
                not. Add and offered prepare how cordial two promise. Greatly
                who affixed suppose but enquire compact prepare all put. Added
                forth chief trees but rooms think may.
              </p>
            </div>
          </div>

           <div className="timeline-item">
            <div className="timeline-icon timeline-icon-2">
              <FaPencilAlt />
            </div>
            <div className="timeline-content">
              <h3>
                Front End Developer at Google <span>(2017-2018)</span>
              </h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life. One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>
          </div>

           <div className="timeline-item">
            <div className="timeline-icon timeline-icon-3">
              <FaPencilAlt />
            </div>
            <div className="timeline-content">
              <h3>
                System Analyst <span>(2017-2018)</span>
              </h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life. One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon timeline-icon-space">
              <FaPencilAlt />
            </div>
            <div className="timeline-content timeline-content-space "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
