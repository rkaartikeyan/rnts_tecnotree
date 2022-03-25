import styled from 'styled-components/native';

interface Props {
  flex?: number;
  'flex-d'?: string;
  'flex-ai'?: string;
  'flex-ac'?: string;
  'flex-jc'?: string;
  padding?: number;
  width?: number;
  'border-w'?: number;
}

const Container = styled.View<Props>`
  ${props => props?.flex && 'flex: ' + props.flex + ';'}
  ${props => props?.['flex-d'] && 'flex-direction: ' + props['flex-d'] + ';'}
  ${props => props?.['flex-ai'] && 'align-item: ' + props['flex-ai'] + ';'}
  ${props => props?.['flex-ac'] && 'align-content: ' + props['flex-ac'] + ';'}
  ${props => props?.['flex-jc'] && 'justify-content: ' + props['flex-jc'] + ';'}
  ${props => props?.padding && 'padding: ' + props.padding + 'px;'}
  ${props => props?.width && 'width: ' + props.width + 'px;'}
  ${props => props?.width && 'width: ' + props.width + 'px;'}
  ${props =>
    props?.['border-w'] && 'border-width: ' + props['border-w'] + 'px;'}
`;

export default Container;
