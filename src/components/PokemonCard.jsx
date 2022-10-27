import React from "react"
import {Card} from "antd"
import Meta from "antd/lib/card/Meta"
import "./PokemonList.css"
import {StarOutlined} from "@ant-design/icons"



const PokemonCard =({image}) =>{

        return  <Card   
                    style={{width:250,objectFit:"scale-down"}}
                    title="Ditto"  
                    cover={<img src={image} alt="Dito" style={{width:250,objectFit:"scale-down"}} />}
                    extra={<StarOutlined/>}>   
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
}

export default PokemonCard