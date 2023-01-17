import useTheme from '../../hooks/useTheme';
import { themeNames } from '../../Context/Theme/ThemeColors';

const ThemeSelector = (): JSX.Element => {
    const { themeState, setTheme } = useTheme();

    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        if (event.target.value !== 'no') setTheme(event.target.value);
    };

    return (
        <select
            name='select'
            onChange={(event) => handleOnChange(event)}
            value={themeState.name}
        >
            <option value='no'>- Modos -</option>
            {themeNames().map((name: string, index: number) => {
                return (
                    <option
                        key={`${index}-${name}`}
                        value={name}
                    >
                        {name}
                    </option>
                )
            }
            )}
        </select>
    );
};

export default ThemeSelector;