import React,{useState} from 'react'
import Footer from '../Component/Footer/Footer';
import Navbar from '../Component/Navbar/Navbar';

function Disclaimer() {
    const [loading, setLoading] = useState(true);
    const spinner = document.getElementById("spinner");
    if (spinner) {
      setTimeout(() => {
        spinner.style.display = "none";
        setLoading(false);
      }, 4000);
    }
    return (
      !loading && (
        <>
        <Navbar/>
    <section className='margin-top'>
         <div className="container">
      <div className="pol">
      <h2>Risk Warning</h2>
      <p>
        
       
       MetaBall.com    will make the ultimate decisions about the interpretation and modification of
        this program.   MetaBall.com     reserves the right, at its sole discretion, to alter the specifics of
        the program at any time and without advance notification to the users. If there is a
        change, it will be posted on the   MetaBall.com     website right away.   MetaBall.com     asks that you
        check our website for the most recent information. You are considered to have agreed to
        and accepted Metaball's modifications to the program specifics if you continue to
        participate in the program after it has been announced that the aforementioned
        changes will take effect. If the users do not agree with the modifications that have been
        made to the specifics of this program, they must immediately withdraw from
        participation in this program.
          MetaBall.com     retains the right to expel from the platform any users who are proven or
        believed to have cheated or broken the rules. In the event that this occurs, any incentives
        that have not yet been given out will be voided instantly. Besides that, People who use
        the moniker "afunverse.com " for illicit purposes will be held responsible for their actions.
        profits.</p>
        </div>
        </div>
</section>
<Footer/>
</>
   
  )
    )
}

export default Disclaimer