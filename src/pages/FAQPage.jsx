import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "What are your restaurant hours?", answer: "We are open Monday to Sunday from 10 AM to 10 PM." },
    { question: "Do you offer vegetarian options?", answer: "Yes, we have a variety of vegetarian dishes available on the menu." },
    { question: "Do you take reservations?", answer: "Yes, you can reserve a table by calling us or using our online reservation system." },
    { question: "Do you provide catering services?", answer: "Yes, we offer catering for all types of events. Please contact us for more details." },
    { question: "Is parking available?", answer: "Yes, we have ample parking space available for our customers." },
  ];

  return (
    <section className="py-16 px-4  md:p-6 lg:p-8 mx-2 sm:mx-4 md:mx-8 lg:mx-10">
      <div className="justify-around flex">
      <h2 className="text-4xl font-semibold text-center text-gray-600  font-nunito" data-aos="fade-down">
        Frequently Asked Questions
        <img className="" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhMSEhAVFhUSFRUYEBYWFxUVFRYVFxcYFhYYFRcYHSggGBolGxUZITEhJikrLi8uFyAzODMtNygtLisBCgoKDg0OGxAQGi0lHyYtKy0uLS0tLy0tLS0wLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALEBHAMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgECAwQFBwj/xABFEAABAwEFBAYFCgMHBQAAAAABAAIDEQQFEiExBkFRcRMiMmGBkZKhsdHSBxQWQlJTVHKywTM04RVEYoKiwvAXIyRDk//EABsBAQACAwEBAAAAAAAAAAAAAAACBAEDBQYH/8QAMxEBAAICAQMCBAQGAQUBAAAAAAECAxEEEiExE1EFFCJBMmFxkRUzUoGhsfAjNELR4Qb/2gAMAwEAAhEDEQA/APcUBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQUc4DUoMZnCl0o9SwzFZ6WOpb0h4pqDcqYzxKzqDcmM8VjUG5XCUpqDcrhP3LHSz1L2yhY1LO2SqwyICAgICAgICAgICAgICAgICAgICAgICAgte8BZ0xtgdMT3KUQjtYssKICAgICAgICCoNEGVs3FR6Uupla8FY0ztcsMiAgICAgICAgICAgICAgICAgICAgxSy0yClEIzLApIqICAgICAg83/6mvbaWCSy4bLI4dHL1g4xO7EoPZIIo7DqAeIz2xStonVu8ExavmHpK1CiAgICAgyNlIWNQztlbMD3KOktsiwyICAgpVBTGOITRs6QcVnUsbMY4hY0bVBRlVAQEBAQEBAQEGOZ9OZWYhiZaymgIMbyp1hiVAVkZC5Q0yqCmgWBr3lC6SGVjDR743tYToHOaQ0nxKzE6kRV3yevlsLbHNam9VrAHsjIpgIwihd1shSuXIKvWvRyJy1/Zatl6sEYp+33dHZy8JmyyWC10dNBGx7JWijZ4XHCH4fqvDhRw0rmFatETHVCr+SQqApI8Ab/AE+dM0iJJmBsgdplxCa0bVQEBAQVBogu6U8VjUM7kMh4pqDcrSe9ZYUQEBAQEFweRvWNM7ZWzcViasxLMCopCAgICAgINR7qlThCVqywILXMUolhYRRSiRWuSa7g1JGlfbniLHG4tLCCaHUHI/sVzviHqVxdVJ1pe4HROXpvG9uFZ72lY5rjI5wBBcO6uY8lxqczLW0TNpmPu7F+HitWYiup+ybsma7suBpwNeS9BW0W8S8/NZjzDXnszcYlwjHhwYt+GuLDyqKrZWfshZRSREFUFEBAQEBAQEBAQULqLMRsVBSYBYBAQEF8b6LEwzEtkGqgmqgICAgskNAVmGJaqmgICC2QKVWJWKbCiC5qxLKCfKXtMbOz5rC6kkrayuGrIzuHBzqEdwB4gqxhwxk72jshbJNZ7eXmYvO0AB3Ty0cSGnG6hLaYhrqKjzHFT+T4s9uiv7JfNciP/ADn92Ru0Nrb2bZO2gypK8U9a3V4+GvaKw1WzZLd5l9AXdM6SGJ764nRsc4HcS0E+tcuYiJnTe2FgUQEBAQEBAQEBBbIpVYkrQJrcm1MO8rO/YC/gnSbWkrOhewlRtohcosiAgywPoacVG0MxLYUUxAQEGOfRZr5Ys1lNAQCUHOuy/bLav4FpikqCaNcC6g1OHWnfRSms18wN12W5Zjuw59/PIs8hGRoKEZHtBb+PG8kba80/RKB2y8nRMc90j6NFe0c+A13nJdaaUiN6hz4m0zraM2G6n2p7p7QT16kVJxOyoDxDQKU5Dco1ptttk12hl2VioJoXgHo3g0IqMVC0mh39UZpjrEMZZntMO782Z9230R7lt1DVuW386k+8f6Tveo+nT2j9meq3ukWx0znOlxOcaBlKkne7iqHPrERXUe61xpmZnaSF6odK1thttsEUb3n6oqO86AeJopUxTe0VhG9umsyhf9vWn74+iz4V1vlMPsoevf3dLZ++5HTBkr8QeCG1DRR2o0G/MeIVflcWladVI8NuHNabatLe2i2ts1gc1kxfie3EGsbiOGtKkkgDMHfuVHHhtfvC3Noh2oJQ9rXt0e0ObuyIqMjpqtSS9AJpmd2qCN3ntQGkthAcftns/wCUb+ftXQw8GZ737fkq5OTEdqo/abzmk7Urj3A0HkKBX6YMdfEKtsl7eZauI8StnTHsjuWzBeErOzK4d1SR5HJQthx28wlGS0eJd27NpgSGztp/jbp/mb+48lRzcKY70/ZYx8n7WSZhBAIoQcwRmCO4rnTuO0rcNDaK+GWKzvtD2ucGYRhbSpL3BjddBVwzUsdJvbUEzqGts1f5tgfis0sD2Uq2RpwkO0LH0APeNQsWisd62if0Z1aPxRp2wFEAN4047kBBtMdUVWuWyFyAgIMVo08VmqNmupoiAg84sGwDYLc6XEGjpHPsrYuqI2HMVyyLesKDKlONFrz8q/VXHX7+VjDgrNLZLPRytiu5u0Tf/Gl5D9QVjiz/ANWrVm/BKAMxNrSQ0dqC2Mim8AltQDzXTzcWuW0WtM9vtvsq4uRbHWYrEd/v93Vum5nWkOLXNGEgGteFdyZ+TGKYiYQx4ZvG4lQ7Nhk/Rx4XTSUdO5pNGR5hrpAdKltAAKmp4EihHOt68zr6df5XZ41ZwR3+rf8Ahv8A0Tk+9Z/q9ys/xCvtKt8rb3PonJ96z/V7k/iFfaT5W3u6tw3O6zmQue04w0Cld1ePNVeRyIy61Hhvw4ppvbqELS2oztda+zEPzP8AY0e0+Sv8LH5vKryb/wDija6CouY8tIINCCCDwIzCxMRMakidS6l6bUWJ08fSODJBG0SPLSQ0ONSyoBoRUk7utqvOcrhZ7TFa+N/8l3eJycVKzNvOuyctcCAQQQRUEZgg6EHgjSIIhtPe5e4wsPUaaPI+s4buQ9q6vD48RHXbz9lHkZdz0wj6vqzp3dccs4xABrTo52VeQ1KrZeXTH28y20w2v3dP6Imn8cV/Jl+pVv4h3/D/AJbvlfzc28bilhBcQHNGrm505jUKzi5dMnbxLTfBavdy1Zanc2avYxOEbz1HHKv1XH9j/XiqXL4/XHXXysYMvTPTPh3NorSwNEbm4i4h2f1cDg5p54gKcl5jncqMUdMeZ/07/A405Ldc+IbNyvaYgWmufX4h2VR7Fs4NqTi3X+7XzovGX6v7fo3iKq4prWsA0GuqzMmlywM9nOoUbJVZlFIQEGOfRZjyxPhrKaAg1rzn6OJ7hqBlzOQ9ZVflZPTw2sscXH6mWtUPbaHAUr451815mMto+70s46+yQRySSwxUkLX4xip2ntaeO7KhJ7u9dvFkvkw07/Vv93FyYqY819x9Ov2bG0f8tLyH6gu3xf5tXHzfglAV3HNS3YrsS/mHsXL+Ifij9F3i+JSBsYBJDQC41cQACSAACeJoAPBc9aXICAUGJ8waCXaAEnkMytkV3PZGZ1Dzy22kyyOefrGvIaAeAou7jp0VirmXt1WmW7cd2dP0ldGtIb+c9nyp7Fp5Gb09a/5DZhx9e3EvK0iBjnuGbcqcXaAea3zaNba4rudPP5Zi9zi41JNXHvKr9W5WojUPSNmPlBs9lsAZNiMsHUZGNZGmrmEO0a0DqknTCNagHn5sUzknTfS30pDd7ZGwvvG0tw2mWLDGzPDBG59WMaDmHGrXP727qKOKnXeMceNmW+qTKOruOY7OzV2iaQucKsjoSPtOOg5bz/VVOZm9Ouo8y34MfVO5TZcZ0HM2hvU2WLGyIyOJo1taDIFziTQ6AHLetWbLGOu1ni8f1r9MzqGpsltF8+ZJiYGPjIxAGoLXVwnPkR4d6xhy9cJ8ziehMancS5G092CF4ewUZJXLc128DuOvmu9w883r0z5hxORj6Z3HhxVcV3VmthlwF2oYGnvw6nx18V8/+NV6eXaP0e1+ETvixP6uzsq/OQcQ0+RI/dZ+E2+q0NfxWv01lIV23FUa6unePI0PrCCqDLZzmo2Zq2FFMQEFsgyKzDEtRTQEGjfBBZhI1NT+VoxE+pU+bqcfT/zsucLtfq9v9yh6809Kl1yQtETHAZuaKnlll3ZL0nBx1jFFo8zDzfOyWnLNJ8RKm0f8tLyH6gurxf5tXNzfglAV3HNbNlt0kQIjkLQczTetd8VL97QlW9q+JZv7atH3zvV7lD5XF/Sl61/c/tq0ffO9XuT5XF/Setf3DfVo++d6vcnyuL+k9a/un0Jq1p4gexcO3l0o8OHtZasEYYDnIc/yjM/sPNXeFTqvufsr8i2q690OXWUU6uOx9FC0EdZ3WdzO7wFB4LjcjJ13mXRw06aoT8od0PfLHhYejkeHSkaN3GvOpPMq1x80WrGOZ7tWTHMTN4js86vNmGaaopWRxA0yqaeC2xrc692PERt6R8muy9kmgitckOOVsj8JLnFtWu6pwVwkjl36qhyr2i81WMcRMbSvbF9IWjjIK+TlLgR/1Jn8mrkz9CGrrqKa7IsAgrvc9xPqH7Lj86d5V/jR9DtKmsIvt1f8dkbA1+KsklchUBjRR5PpigGdeRUcnFtyKTFfMN2DkRhv1WjshNw7YCG2yOYwujtDgDXJ1Bo4DcRV2W8HcsRw78bH1zP6wt25WPmT6Wta3qf/AG9H2rjBs7j9lzSPPD+6u8KdZYcfkR9CDrtOeztqGhw3E+S8H/8AoP8AvJ/SHs/gn/ax+st+6p5S4mCuICrhQGrchodd2ma5vFtmi8+l5XuVTFNYjN4Smy2uY9uHdnhqOtTg6mXivRYMmS/a8aeez4sdI3Sdt6NtABwH/CrEqy5Bkh1CxPhmPLZUExAQEGm4UK2NcqIOZf7SLNang9YWebBp1SI3HLxA8lGuKtr/AF94ntr8k5yzWuq9p8/3eCSbR2qNjsM7tScw1xqak0xA71dzfDOLbvNIasXxDk17Rd9D2CIsijadWsaDzAAJ81TisVjVfCdrTadz5au0f8tLyH6grPF/m1ac34JQFdxzW9d91STgmMAhpoammeq05eRTHOrNlMVr+G19GbR9lvpBavncSfy1z6M2j7LfSCfO4j5a4dmbR9lvpBPncR8tdNYm0AHAAepcee8r8eEDv+29NM4g9VvVZyG/xNSu3xcfRjj3c7Nfqu0rO4BzS4VAIJHEDct14mazENdZiJ7urfu07nWeZsUbxI5jgwtd1gTlUUFajuVCOFMTuZW/mYntp5fLetqbk+abKn8QuOmnb5rdGOsT1RHcm241vsmt0v6SzRPmDXOLa5tGlThypwovCc/JNOVfomfPu9fwscW49OuPsmWxtoBhMYABjcTQZZOJNfOvqXb4lLRxqXnvtxObaJ5N6x9l+1sWKEn7Lmnw7P8AuXU4VtZNOdyI3RDF11BLdjbQCx0e9pqOR/qD5rl8+mrRZd41u2me8Np7NZpHRSyFrm0JGCQ5HMEENofDvXMvmpWdS6ePh5cleqsdv1Q/5U3G0RRSRVexj2gYQXYi9jyC0DM6KXCz19e077RGv8o8nBauGsTHfe9f2dDYe4I3RWd0kQa+MNkcC0NeXnFh6SorlWtDvaOFFXm85uRed7rE9vZvmfQwVrEatMd/d3tsLQGwhm97h5NzPrp5rrcGm8m/ZyeTbVdIauuoNLaG12myxRSsDDFKXNBc0kte3cTiAzFaZfVK4fM+Hcbk8ibX3vUfft/p1+Jz8+DD001r9P8A6jVi2ktMMzZ2ynEw9nRhB1a5o1B8/Fb8Xw/j4q6pXX5/dHLzM2Wd3tv/AE9w2evmO2wNnj0OT2nVjx2mnl6wQd6p5KTS2pZidxt0VBkQXxahYnwzHltKCYgICDXnbnXipVRsxKSLHaYg9j2nRzXNPIgg+1ZjyPnfZa7jabZZYdQ6RrpKZjAzrv8AAhpHiupyLaqp4o+p9GrlLjm7R/y0vIfqCscX+bVqzfglAV3HNSvY11I5T/iHsXL58bvX9Fzizqsu6y0gmlFTnHpZizPVa0hBz7/tvQwuIPWd1Wczv8BU+C38bH6mSIas1+mqALuuauDDwPksbj3NSr0Z+yfIp1R7s6lkgiNcwaDiuN8c5nocbVJ727f+3U+EcX1s+7eK92SYYiG+J5LwtqWisWnxO/8AD2Vb13NY8xr/AC2bltnQ2gHRrjgdyPuIBXveNh3wMcR5isS8TysmuZefzlNbVE2RrmO0cCD4qrSZrMWhstETGped2mAxvcx2rTQ+8dx1XfpeL1i0OXas1nUr7BbHQvD26jUbiN4K18itJxz1+I7p4pt1xFfK6+XC3PDntDQyoZTtUO4nf/Ur57m5+TJfcePs97xuNXj01958sQu+jQ1s8zAAQ3C+lKknSlDmd4Uac20eYif1gy8euTvuYn8lmyYnsdrllnnM0UkJbUk9Jia8GMYdBk5+hpnXJeh4OanKr0YqamPPt+7z3Ow3489WS2/b3/Zs3nb3TvL3Zbmjc0cP6r0mHDGKvTDhZLzedywWeEyOaxuriAPFTvaK1m0o1jqnUJ3a7lhmsxssjcUZYGncajMOB3OB61eK4E5Jm/V93UisRXT59vGxdBNLE2VsjY3lrXtzDgND76bwV08XVMblotrb0z5JLrtEXSyvaWQytbga6oL3A5PDdwoSK76jgqvLvWdRHlsxxMPRlTbRBkh1CxPhmPLZUExAQEFkrahZhiWqpoNDaBr3WW0iIVkMEwjAoCXmNwbQnTOilWaxaJt4YmJmNR5eZ/JZcc0Vve+aFzA2zvwF1NS9gyz4By35+TjydqW2jTBkx97Rp62qybnbR/y0vIfqCscX+bVqzfglAV3HNSnZFtYpamnXb7FzOdOr1/Rc434Zdd7KbweRVaJ23TGlzpc6juqsRXtqWd924x1eY1WmY0nEodtbbMcojByjGf5jmfVQea63Bx9NOqfuo8m+7a9nGs8Jkc1jdXEAeKt3tFazafs0Vr1Tp6RBEGNaxujQAOQyXnrWm0zMurEREaZKrDKP7QgySxxt1ofWdfJq43xGtsuamOrsfDrVx4r5JYr/ALG2NsRaNBgPf9YV8S4+Kj8TxenipEeI3H/P2S+G5ZyZbzPmdSiz9TzK9xxa9OGkflH+nlOTO81p/OU5uS2dNCxxPWb1X8xv8RQ+K5mfH0ZJj+63iv1UiWC/LoE4xNoJGjLg4cD+xU+Pn9OdT4RzYuvvHlDponMJa4EEag6qr8f5nTxox0nvft/Zd+Ccbqzzkt4r/tnjOFld5/4F5ngcK+bkximPE9/yh6Dm8ymLBOSJ8x2a/SHifNe8ngcaZ36cfs8ZHN5H9c/uoSrNKVpGqxqPyaLXtad2naikiqCg3L7kt9pissDHhkVqldFJLQ4y3AXipB7JDHjcXZCuZryssYceSZj9l/HN7U7uJtn8nostkE0D3yOiqbTWgrGadZrRoG0qRU5EmuShXkza2pTnHER2TX5N75+d2GIuNXw/9qXeasAwk95YWnnVV8temydZ3CULWkIMkGqxbwzDZUExAQEGG0yuaAWxl+eYBaKd/WIQaJll/DP9OL4lOJhHS10sv4V/pxfEkzE+SImO6I2KzX1G+N7rNY3YGlrwJHMxtJxUBzwkH61DXgsVxYKd679k75ct4+rSXCWX8M/04viWdw16lq3rHPLE+NtmcC4ClXxU1B3O7ltw5a0vFp+yGTHNqzEIz9GbX9yP/oxdL+IYvaVT5S/5O1cNgtEDHtfZycZBGF8fCm9wVLk8muS0TX7LGHDakTEtzo5/wzvTi+Ja/Vqn6cqiOb8M704viT1anpyvYZxU/NnVINOvHSu6vWUZvWdQzFJRaTZ22OJcYQSSST0jNTmd66NefiiNREqc8XJM77N+47lnhk6SSzk0BwYXxnM5VzI3V81p5PMrkp01bcPHtW25SHpZfwz/AE4viVDcLPStdJMf7s/04viWYtB0y4rbvtTbc60iFzopIQxzHSsrG9pqHRtrShGuYzzzSfTnvrv7s/Vrp329mfaCz2qWFzYbMOlq0sMj2YNc64XV7JPjRas+LHnr033ptwZb4bdVUfh2btxHXgYHb8MrSPAkBdinPx1rEans5t+LeZmduzcF32qzudigq1wFQHx1xDQ5ngT6lX5PJx5YjW9w2YcN6TO/DsudLQ0sz67qviAr39ZVOtYiriWu77TM4vksTScIawC0AAZkk1ArVVYxz60ZramY8e0LvqY4xelWZiJ8+8tWTZy0OH8ItI0AdG5tOZcDXwV3g5KcaLTMbm07mVPmxOeYis9ojUQ1/ozavuh6bPeul/EcftKh8pf3bVn2Yk/9kch7muiHrLj7Fqv8R/phOvD95dqz2Ho2ljbEaOFHVdES7mS6qp25F7T1TKxGGsRqIchmzbxLUwPMWuHHHir9knFp36+1Wp+ITOPX3aI4n1b+yQ4pMh80dlTD1ocqaU62SodS10qmSU5GyvIOvWi+JNwdKE3Bs5b7utVodZrNE6yzuaWxPmDHsAz6pDXDLE4U3gNzFFutkpasb8oxSYlN+ll/DP8ATi+Jadwlo6WX8M/04viTcGl8VolH92f6cXxLEztmIb8TiQCWlpIzBoSO7LJRSXoCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/9k=" alt="" />
      </h2>
      </div>
      <div className="mt-8 max-w-3xl mx-auto space-y-4" data-aos="fade-up" data-aos-delay="200">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500"
              onClick={() => toggleAccordion(index)}
            >
              <span>{faq.question}</span>
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.span>
            </button>
            
            <AnimatePresence>
  {activeIndex === index && (
    <motion.div
      initial={{ maxHeight: 0, opacity: 0, scaleY: 0.9 }}
      animate={{ maxHeight: 300, opacity: 1, scaleY: 1 }}
      exit={{ maxHeight: 0, opacity: 0, scaleY: 0.9 }}
      transition={{ duration: 0.01, ease: "linear" }}
      className="px-6 py-4 text-gray-600 font-bold bg-purple-100 overflow-hidden"
    >
      {faq.answer}
    </motion.div>
  )}
</AnimatePresence>

          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;
