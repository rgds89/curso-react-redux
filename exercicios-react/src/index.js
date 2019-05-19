import ReactDOM from 'react-dom'
import React from 'react'
import FirstComponent from './components/FirstComponent'
import {CompA, CompB} from './components/TwoComponents'
import MultiElements from './components/MultiElements'
import FamilySilva from './components/FamilySilva'
import Family from './components/Family'
import Member from './components/Member'
import ComponentWithFuction from './components/ComponentWithFunction'
import Dad from './components/Dad'
import ComponentClass from './components/ComponentClass'
import CountComponent from './components/Count'
import Hook from './components/Hook'

const elemento = document.getElementById('root');

ReactDOM.render(
    <div>
        <FirstComponent>

        </FirstComponent>
        <CompA valor ="React Legal" />
        <CompB valor = "React Massa" />

        <MultiElements />


        <FamilySilva />


        <Family lastname='Silvvvvvvaaaaaa'>
            <Member name='Andre' />
            <Member name='Roger'  />
            <Member name='Ana'  />
            <Member name='Renner' />
        </Family>



        <ComponentWithFuction></ComponentWithFuction>

        <Dad />

        <ComponentClass value='React + Redux do zero'/>

        <CountComponent number= {0}></CountComponent>

        <Hook></Hook>


    </div>, elemento)
