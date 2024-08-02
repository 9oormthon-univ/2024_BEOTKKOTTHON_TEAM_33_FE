import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { BaseButtonWrapperProps } from "./Album.types";

const ImageLayout = css`
  width: 100%;
  height: 102px;
  flex-shrink: 0;

  cursor: pointer;
  object-fit: cover;
`;

const BadgeLayout = css`
  position: absolute;
  top: 8px;
  right: 8px;
  border: 2px solid #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;

export const AlbumContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(102px, 1fr));
  grid-gap: 2px 4px;
  padding: 4px 3px;

  padding-bottom: 120px;
  background-color: #fff;

  overflow-y: auto;
`;

export const PhotoWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  ${ImageLayout}

  position: relative;
`;

export const SelectedImage = styled.div`
  ${ImageLayout}

  position: absolute;
  top: 0;
  left: 0;

  background-color: ${({ theme }) => theme.colors.gray[300]};
  opacity: 0.5;

  z-index: 1;
`;

export const Badge = styled.div`
  ${BadgeLayout}
`;

export const SelectedBadge = styled.div`
  ${BadgeLayout}

  background-color: ${({ theme }) => theme.colors.green[400]};
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.text.body3_bold}
  color: #fff;
  text-align: center;

  z-index: 2;
`;

export const BaseButtonWrapper = styled.div<BaseButtonWrapperProps>`
  position: fixed;
  bottom: 0;
  left: 50%;
  height: 130px;
  transform: translateX(-50%);
  width: ${({ width }) => width};
  padding: 14px 16px;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 26%);
  z-index: 3;
`;
