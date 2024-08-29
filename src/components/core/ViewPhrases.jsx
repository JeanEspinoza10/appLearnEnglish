
import React from 'react'
import { phrases,listTag } from "@const/listphrases.js";
import "./viewphrases.css"
export const ViewPhrases = ({pharesID, tag}) => {
    const generateImg = (listValue) => {

        if (tag==="All"){
            return listValue
            .filter(value=>value.id===pharesID)
            .map(value=>{
                return (
                <div key={value.id}>
                    <h3>{value.phrase}</h3>
                    <figure>
                    <img src={value.url_img} alt="figure-example" />
                    </figure>
                    <p name="description-phrases">{value.description}</p>
                </div>
                )
            })
        }else{
            const filteredList = listValue.filter(value => value.tag === tag);
            const foundItem = filteredList.find(value => value.id === pharesID);
            const itemToRender = foundItem || filteredList[0];
            if (!itemToRender) return null;
            return (
                <div key={itemToRender.id}>
                    <h3>{itemToRender.phrase}</h3>
                    <figure>
                        <img src={itemToRender.url_img} alt="figure-example" />
                    </figure>
                    <p name="description-phrases">{itemToRender.description}</p>
                </div>
            );
            
        }        
    }
  return (
    <>
        <section id='container-view-phrases'>
                {generateImg(phrases)}
        </section>
    </>
  )
}
