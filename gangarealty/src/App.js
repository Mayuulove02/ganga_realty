import './App.css';
import AllRoutes from './Routes/AllRoutes';
import { Button, ButtonGroup, Text, useMediaQuery } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { LiaWhatsapp } from "react-icons/lia";
import { BiSolidPhoneCall } from "react-icons/bi";

function App() {
  const [isMobile] = useMediaQuery('(max-width: 920px)');
  return (
    <div className="App">
      <AllRoutes />
      {
        isMobile ?
          <>
            <div className="landing-number-box-2">
              <ButtonGroup gap={2}>
                <Button  w={"140px"} bg={"#f4ab0f"}>
                  <Link to="https://api.whatsapp.com/send?phone=+917015227683&text=Hi&utm_source=website+banner" className="landing-number-2" target='_blank'>
                    <Text display={"flex"} color={"green"} gap={"5px"}><LiaWhatsapp color='green' size={"22"}/>Whatsapp</Text>
                  </Link>
                </Button>
                <Button w={"140px"} bg={"#f4ab0f"} >
                  <Link to="tel:+917015227683" className="landing-number-2">
                    <Text display={"flex"} color={"blue"} gap={"5px"}><BiSolidPhoneCall color='blue' size={"22"}/>Call Now</Text>
                  </Link>
                </Button>
              </ButtonGroup>

            </div>
          </>
          :
          <>
          </>
      }
    </div>
  );
}

export default App;
