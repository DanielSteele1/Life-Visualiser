import { Stat } from "@chakra-ui/react"


const Stats: React.FC = () => {

    return <section className="stats"> 

        <Stat.Root>
            <Stat.Label>Amount of life lived</Stat.Label>
            <Stat.ValueText>00 Years</Stat.ValueText>
        </Stat.Root>

        <Stat.Root>
            <Stat.Label>Amount of live left</Stat.Label>
            <Stat.ValueText> 00 Years</Stat.ValueText>
        </Stat.Root> 
        
        <Stat.Root>
            <Stat.Label>Unique visitors</Stat.Label>
            <Stat.ValueText>192.1k</Stat.ValueText>
        </Stat.Root>

    </section>
}

export default Stats;