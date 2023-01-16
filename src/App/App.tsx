import FullViewport from "../components/FullViewport/FullViewport";
import ThemeModeSwitch from "../components/ThemeModeSwitch/ThemeModeSwitch";
import Title from "../components/Title/Title";
import Container from "../components/Container/Container";
import Description from "../components/Description/Description";
import Footer from "../components/Footer/Footer";
import ThemeSelector from "../components/ThemeSelector/ThemeSelector";

// import SpaceBetween from "../components/SpaceBetween/SpaceBetween";

const App: Function = (): JSX.Element => {
    return (
        <FullViewport>
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <div style={{ textAlign: 'center' }}>
                    <ThemeModeSwitch />
                    <ThemeSelector />
                    <Title text='What is Lorem Ipsum?' align="center" />
                    <Container>
                        <Description text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                    </Container>
                </div>
                <Footer>
                    <Description text='Footer - Lorem Ipsum' />
                </Footer>
            </div>
        </FullViewport>
    );
};

export default App;

/*
        <FullBody>
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <div style={{ textAlign: 'center' }}>
                    <ThemeModeSwitch />
                    <Title text='What is Lorem Ipsum?' align="center" />
                    <Container>
                        <Description text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                    </Container>
                </div>
                <Footer>
                    <Description text='Footer - Lorem Ipsum' />
                </Footer>
            </div>
        </FullBody>
*/

/*
        <FullBody>
            <SpaceBetween direction='column' horizontalAlign='end' verticalAlign='start'>
                <div>
                    <ThemeModeSwitch />
                    <Title text='What is Lorem Ipsum?' align="center" />
                    <Container>
                        <Description text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                    </Container>
                </div>
                <Footer>
                    <Description text='Footer - Lorem Ipsum' />
                </Footer>
            </SpaceBetween>
        </FullBody>
*/