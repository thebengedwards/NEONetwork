import styled from 'styled-components'
import { RelSize } from '../mixins'

export const Row = styled.div`
    ${props => props.align &&`
        align-items: ${props.align};
    `};
    display: flex;
    flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
    flex-wrap: wrap;
    ${props => props.justify &&`
        justify-content: ${props.justify};
    `};
    ${props => props.full && `
        flex: 1;
    `};
    ${props => props.paddingBottom && `
        padding-bottom: 10px;
    `};
    margin: 0 ${props => props.flush ? 0 : props.small ? "-10px" : "-20px"};
    @media all and (max-width: 1024px) {
        margin: 0 -10px;
    }
    
`;

export const Col = styled.div`
    display: flex;
    flex-basis: ${props => props.span * 8.333333333333333}%;
    flex-direction: column;
    flex-grow: ${props => props.grow ? 1 : 0};
    flex-shrink: 0;
    padding: 0 ${props => props.flush ? 0 : props.small ? "10px" : "20px"};
    margin-bottom: ${props => props.base ? RelSize(props.base, 16) : 0};
    margin-left: ${props => props.offsetLeft ? props.offsetLeft * 8.333333333333333 : "0"}%;
    margin-right: ${props => props.offsetRight ? props.offsetRight * 8.333333333333333 : "0"}%;
    min-width: ${props => props.minWidth ? RelSize(props.minWidth, 16) : 0};
    max-width: ${props => props.grow ? "none" : `${props.span  * 8.333333333333333}%`};
    @media all and (max-width: 1024px) {
        padding: 0 ${props => props.flush ? 0 : "10px"};
    }
    ${props => props.justify &&`
        justify-content: ${props.justify};
    `}
    ${props => props.span1440 && `
        @media (max-width: 1440px) {
            flex-basis: ${props.span1440 * 8.333333333333333}%;
            margin-left: ${props.offsetLeft1440 ? props.offsetLeft1440 * 8.333333333333333 : "0"}%;
            margin-right: ${props.offsetLeft1440 ? props.offsetLeft1440 * 8.333333333333333 : "0"}%;
            max-width: ${props.grow ? "none" : `${props.span1440 * 8.333333333333333}%`};
        }
    `}
    ${props => props.span1024 && `
        @media (max-width: 1024px) {
            flex-basis: ${props.span1024 * 8.333333333333333}%;
            margin-left: ${props.offsetLeft1024 ? props.offsetLeft1024 * 8.333333333333333 : "0"}%;
            margin-right: ${props.offsetRight1024 ? props.offsetRight1024 * 8.333333333333333 : "0"}%;
            max-width: ${props.grow ? "none" : `${props.span1024  * 8.333333333333333}%`};
        }
    `}
    ${props => props.span768 && `
        @media (max-width: 768px) {
            flex-basis: ${props.span768 * 8.333333333333333}%;
            margin-left: ${props.offsetLeft768 ? props.offsetLeft768 * 8.333333333333333 : "0"}%;
            margin-right: ${props.offsetRight768 ? props.offsetRight768 * 8.333333333333333 : "0"}%;
            max-width: ${props.grow ? "none" : `${props.span768  * 8.333333333333333}%`};
        }
    `}
    ${props => props.span480 && `
        @media (max-width: 480px) {
            flex-basis: ${props.span480 * 8.333333333333333}%;
            margin-left: ${props.offsetLeft480 ? props.offsetLeft480 * 8.333333333333333 : "0"}%;
            margin-right: ${props.offsetRight480 ? props.offsetRight480 * 8.333333333333333 : "0"}%;
            max-width: ${props.grow ? "none" : `${props.span480  * 8.333333333333333}%`};
        }
    `}
`;