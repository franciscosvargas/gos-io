import React, { useState }  from 'react';
import { FormattedMessage } from 'react-intl'
import { bindActionCreators } from "redux";
import { Link, LanguagesList, Language, LanguagesContainer} from './styles';
import { connect } from "react-redux";
import * as actions from '../../store/actions/translation';

const SelectIdioma = ({changeLanguage, language, isMenu}) => {
    const [menu, setMenu] = useState(false)
    function muda (lingua){
        changeLanguage(lingua)
        window.location.reload();
    }
    
    return (
        <LanguagesContainer>
        {menu?(<LanguagesList isMenu={isMenu}>
        <Language isMenu={isMenu} onClick={() => { muda("en")}}>English</Language>
        <Language isMenu={isMenu} onClick={() => { muda("es")}}>Español</Language>
        <Language isMenu={isMenu} onClick={() => { muda("pt-BR")}}>Português</Language>
        </LanguagesList>):null}
        <Link onClick={() => { setMenu(!menu)}}><FormattedMessage id="language" /></Link>

    </LanguagesContainer>
    )
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

const mapStateToProps = state => ({
	language: state.languages.language
})
export default connect(mapStateToProps, mapDispatchToProps)(SelectIdioma)
