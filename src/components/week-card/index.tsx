import React, { FC, useState } from 'react';

import Moment from 'moment';
import { Col, Row } from 'antd';
import { useRequest } from 'ahooks';
import { getNowPopularTVs, Tv } from '@/service';
export interface WeekCardProps {
  week: number;
}

const zhDayofWeek = ['周天', '周一', '周二', '周三', '周四', '周五', '周六'];
const WeekCard: FC<WeekCardProps> = ({ week }) => {
  const [TV, setTV] = useState<Tv[]>([]);
  const style = { background: '#0092ff', padding: '8px 0' };
  useRequest(getNowPopularTVs, {
    onSuccess: (data) => {
      setTV(data.top.slice(0, 16));
    },
  });
  return (
    <>
      <h1 className="text-left ">{zhDayofWeek[week]}</h1>
      <div>
        <Row gutter={[16, 24]}>
          {TV.map((v) => (
            <Col className="gutter-row" span={4}>
              <div>
                <img
                  className="object-cover"
                  src={v.image_url}
                  width="160"
                  height="240"
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default WeekCard;
